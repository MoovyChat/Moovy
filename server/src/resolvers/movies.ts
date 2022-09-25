import { conn } from '../dataSource';
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Root,
  Subscription,
} from 'type-graphql';

import { Comment } from '../entities/Comment';
import { Movie } from '../entities/Movie';
import { User } from '../entities/User';
import { MoreThan } from 'typeorm';
import { LIKES_AND_COMMENT } from '../constants';

@InputType()
class MovieInput {
  @Field()
  mid: string;
  @Field()
  name: string;
  @Field(() => [String])
  likes: string[];
  @Field(() => Int)
  platformId!: number;
}

@ObjectType()
class PaginatedMovieComments {
  @Field(() => Movie)
  movie: Movie;
  @Field(() => Boolean)
  hasMoreComments: boolean;
  @Field(() => Int)
  totalCommentCount: number;
  @Field(() => [Comment])
  comments: Comment[];
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  pastLoadedCount: number;
}

@ObjectType()
export class LikesObject {
  @Field(() => String)
  movieId: string;
  @Field(() => [User], { defaultValue: [] })
  likes: User[];
  @Field(() => Int)
  likesCount: number;
}

@ObjectType()
export class LikesAndComment {
  @Field(() => Int)
  likesCount: number;

  @Field(() => Int)
  commentsCount: number;
}

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  getAllMovies(): Promise<Movie[]> {
    return Movie.find();
  }

  @Mutation(() => PaginatedMovieComments, { nullable: true })
  async getCommentsOfTheMovie(
    @Arg('mid') mid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('time', () => String, { nullable: true }) time: string | null,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<PaginatedMovieComments | null> {
    const totalCommentCount = await Comment.count({ where: { movieMid: mid } });
    const query = await conn
      .getRepository(Comment)
      .createQueryBuilder('comment')
      .where('comment.movieMid = :mid', { mid });
    if (time && time !== '') {
      query.andWhere('comment.createdAt < :time', {
        time: new Date(parseInt(time)),
      });
    }
    const pastCount = await query.getCount();
    const comments = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('comment.createdAt', 'ASC')
      .getMany();
    // const commentsLimit = Math.min(limit, 25);
    // const commentsLimitPlusOne = limit + 1;
    const movie = await Movie.findOne({ where: { mid } });
    if (!movie) throw new Error('Movie not found');
    return {
      movie,
      comments: comments.slice(0, limit),
      totalCommentCount,
      pastLoadedCount: pastCount,
      hasMoreComments: comments.length === totalCommentCount + 1,
      lastPage: Math.ceil(totalCommentCount / limit),
    };
  }

  @Mutation(() => [Comment])
  async fetchNewComments(
    @Arg('mid') mid: string,
    @Arg('time') time: string
  ): Promise<Comment[]> {
    const comments = await Comment.find({
      where: { movieMid: mid, createdAt: MoreThan(new Date(parseInt(time))) },
    });
    return comments;
  }

  @Query(() => Movie)
  getMovie(@Arg('mid') mid: string): Promise<Movie | null> {
    return Movie.findOne({ where: { mid } });
  }

  @Query(() => LikesAndComment, { nullable: true })
  async getMovieLikesAndCommentsCount(
    @Arg('mid') mid: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<LikesAndComment> {
    const likesCount = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.movieStats', 'stats', 'stats.movieMid = :mid', {
        mid,
      })
      .where('stats.like = :like', { like: true })
      .getCount();
    const commentsCount = await Comment.count({
      where: { movieMid: mid },
    });
    const payload: LikesAndComment = { likesCount, commentsCount };
    await pubSub.publish(LIKES_AND_COMMENT, payload);
    return payload;
  }

  @Query(() => LikesObject, { nullable: true })
  async getMovieLikes(@Arg('mid') mid: string): Promise<LikesObject> {
    const userLikes = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.movieStats', 'stats', 'stats.movieMid = :mid', {
        mid,
      })
      .where('stats.like = :like', { like: true })
      .getMany();
    const result = {
      movieId: mid,
      likes: userLikes,
      likesCount: userLikes.length,
    };
    return result;
  }

  @Mutation(() => Boolean, { nullable: true })
  async updateMovieTitle(
    @Arg('mid') mid: string,
    @Arg('name') name: string
  ): Promise<boolean> {
    const res = await conn
      .createQueryBuilder()
      .update(Movie)
      .set({ name })
      .where('mid = :mid', { mid })
      .execute();
    if (res && res.affected && res.affected > 0) return true;
    return false;
  }

  @Mutation(() => Movie, { nullable: true })
  async insertMovie(@Arg('options') options: MovieInput) {
    // Check if the movie already exists.
    const m = await conn.getRepository(Movie).findOneBy({ mid: options.mid });
    if (m) return m;
    else {
      let movie;
      try {
        const result = await conn
          .createQueryBuilder()
          .insert()
          .into(Movie)
          .values([
            {
              mid: options.mid,
              name: options.name,
              likes: options.likes,
              platformId: options.platformId,
            },
          ])
          .returning('*')
          .execute();
        movie = result.raw[0];
      } catch (err) {
        throw new Error(err);
      }
      return movie;
    }
  }

  @Subscription(() => LikesAndComment, { topics: LIKES_AND_COMMENT })
  async likesAndCommentCount(
    @Root() root: LikesAndComment
  ): Promise<LikesAndComment> {
    return root;
  }
}
