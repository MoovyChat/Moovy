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

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  getAllMovies(): Promise<Movie[]> {
    return Movie.find();
  }

  @Query(() => PaginatedMovieComments, { nullable: true })
  async getCommentsOfTheMovie(
    @Arg('mid') mid: string,
    @Arg('pid') pid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedMovieComments | null> {
    const commentsLimit = Math.min(limit, 25);
    const commentsLimitPlusOne = limit + 1;
    const movie = await Movie.findOne({ where: { mid } });
    if (!movie) throw new Error('Movie not found');
    const queryBuilder = await conn
      .getRepository(Comment)
      .createQueryBuilder('c')
      .innerJoinAndSelect('c.movie', 'movie', 'movie.mid = c.movieMid')
      .innerJoinAndSelect(
        'c.platform',
        'platform',
        'platform.id = c.platformId'
      )
      .where('c.platformId=:pid', { pid })
      .andWhere('c.movieMid = :mid', { mid })
      .orderBy('c.createdAt', 'DESC');
    const totalCommentCount = await queryBuilder.getCount();
    if (cursor) {
      queryBuilder.andWhere('c.createdAt < :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }
    const comments = await queryBuilder.take(commentsLimitPlusOne).getMany();
    return {
      movie,
      comments: comments.slice(0, commentsLimit),
      totalCommentCount,
      hasMoreComments: comments.length === commentsLimitPlusOne,
    };
  }

  @Query(() => Movie)
  getMovie(@Arg('mid') mid: string): Promise<Movie | null> {
    return Movie.findOne({ where: { mid } });
  }

  @Query(() => LikesObject, { nullable: true })
  async getMovieLikes(
    @Arg('mid') mid: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<LikesObject> {
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
    const payload: LikesObject = result;
    await pubSub.publish('LIKES_UPDATE', payload);
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

  @Subscription(() => Int, { topics: 'COMMENT_COUNT_UPDATE' })
  async movieCommentsUpdate(@Root() mid: string): Promise<number> {
    const [comments, commentsCount] = await Comment.findAndCount({
      where: { movieMid: mid },
    });
    console.log(comments, commentsCount);
    return commentsCount;
  }
}
