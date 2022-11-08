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
import { LIKES_AND_COMMENT } from '../../constants';

@InputType()
class MovieInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  synopsis: string;
  @Field()
  stills: string;
  @Field()
  thumbs: string;
  @Field()
  season: string;
  @Field(() => Int, { defaultValue: 0 })
  year: number;
  @Field(() => Int, { defaultValue: 0 })
  runtime: number;
  @Field({ nullable: true })
  titleId: string;
  @Field(() => Int, { defaultValue: 0 })
  likesCount: number;
  @Field(() => Int, { defaultValue: 1 })
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
  id: string;
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

  @Query(() => PaginatedMovieComments, { nullable: true })
  @Mutation(() => PaginatedMovieComments, { nullable: true })
  async getCommentsOfTheMovie(
    @Arg('mid') mid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('time', () => String, { nullable: true }) time: string | null,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<PaginatedMovieComments | null> {
    const totalCommentCount = await Comment.count({ where: { movieId: mid } });
    const query = await conn
      .getRepository(Comment)
      .createQueryBuilder('comment')
      .where('comment.movieId = :mid', { mid });
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
    const movie = await Movie.findOne({ where: { id: mid } });
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
      where: { movieId: mid, createdAt: MoreThan(new Date(parseInt(time))) },
    });
    return comments;
  }

  @Query(() => Movie, { nullable: true })
  getMovie(@Arg('mid') mid: string): Promise<Movie | null> {
    return Movie.findOne({ where: { id: mid } });
  }

  @Query(() => Movie, { nullable: true })
  async getMovieById(@Arg('mid') mid: string): Promise<Movie | null> {
    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) throw new Error(`Movie not found: ${mid}`);
    return movie;
  }

  @Query(() => LikesAndComment, { nullable: true })
  async getMovieLikesAndCommentsCount(
    @Arg('mid') mid: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<LikesAndComment> {
    const movie = await Movie.findOne({ where: { id: mid } });
    const likesCount = movie?.likesCount!;
    const commentsCount = movie?.commentCount!;
    const payload: LikesAndComment = { likesCount, commentsCount };
    await pubSub.publish(LIKES_AND_COMMENT, payload);
    return payload;
  }

  @Query(() => LikesObject, { nullable: true })
  async getMovieLikes(@Arg('mid') mid: string): Promise<LikesObject> {
    const qb = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.movieStats', 'stats', 'stats.movieId = :mid', {
        mid,
      })
      .where('stats.like = :like', { like: true })
      .getMany();
    const result = {
      id: mid,
      likes: qb,
      likesCount: qb.length,
    };
    return result;
  }

  @Query(() => Int, { nullable: true })
  async getMovieFavoriteCount(@Arg('mid') mid: string): Promise<number> {
    const movie = await Movie.findOne({ where: { id: mid } });
    return movie?.favCount!;
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
      .where('id = :mid', { mid })
      .execute();
    if (res && res.affected && res.affected > 0) return true;
    return false;
  }

  @Mutation(() => Movie, { nullable: true })
  async insertMovie(@Arg('options') options: MovieInput) {
    try {
      parseInt(options.id);
    } catch {
      throw new Error('Invalid movie id');
    }
    // Check if the movie already exists.
    const m = await conn.getRepository(Movie).findOneBy({ id: options.id });

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
              id: options.id,
              name: options.name,
              titleId: options.titleId,
              year: options.year,
              season: options.season,
              stills: options.stills,
              thumbs: options.thumbs,
              synopsis: options.synopsis,
              runtime: options.runtime,
              likesCount: options.likesCount,
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
