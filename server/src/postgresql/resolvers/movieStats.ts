import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  PubSub,
  Resolver,
  Root,
  PubSubEngine,
  Subscription,
  Int,
} from 'type-graphql';

import { Movie } from '../entities/Movie';
import { MovieStats } from '../entities/MovieStats';
import { conn } from '../dataSource';
import { User } from '../entities/User';
import { STATUS_UPDATE } from '../../constants';

@ObjectType()
class LikesAndFavObj {
  @Field(() => Int, { defaultValue: 0 })
  userLikesCount: number;
  @Field(() => Int, { defaultValue: 0 })
  userFavoriteCount: number;
}

@InputType()
class UserMovieOptions {
  @Field(() => Boolean, { nullable: true })
  like: boolean;
  @Field(() => Boolean, { nullable: true })
  favorite: boolean;
}

@Resolver()
export class MovieStatsResolver {
  @Mutation(() => MovieStats, { nullable: true })
  async updateUserMovieStats(
    @Arg('uid') uid: string,
    @Arg('mid') mid: string,
    @Arg('options') options: UserMovieOptions,
    @PubSub() pubSub: PubSubEngine
  ): Promise<MovieStats | null> {
    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) {
      await Movie.insert({ id: mid, name: '', platformId: 1, likes: [] });
    }
    const movieStat = await MovieStats.findOne({
      where: { userId: uid, movieId: mid },
    });
    let detail;
    if (!movieStat) {
      const details = await conn
        .createQueryBuilder()
        .insert()
        .into(MovieStats)
        .values({
          userId: uid,
          movieId: mid,
          like: options.like ? options.like : false,
          favorite: options.favorite ? options.favorite : false,
        })
        .returning('*')
        .execute();
      detail = details.raw[0];
    } else {
      const updateStatus = await conn
        .createQueryBuilder()
        .update(MovieStats)
        .set(options)
        .where('movieId = :mid', { mid })
        .andWhere('userId=:uid ', { uid })
        .returning('*')
        .execute();
      detail = updateStatus.raw[0];
    }
    await pubSub.publish(STATUS_UPDATE, mid);
    return detail;
  }

  @Subscription(() => LikesAndFavObj, { topics: STATUS_UPDATE })
  async movieStatusUpdate(@Root() root: string): Promise<LikesAndFavObj> {
    const userLikesCount = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.movieStats', 'stats', 'stats.movieId = :mid', {
        mid: root,
      })
      .where('stats.like = :like', { like: true })
      .getCount();
    const userFavoriteCount = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.movieStats', 'stats', 'stats.movieId = :mid', {
        mid: root,
      })
      .where('stats.favorite = :fav', { fav: true })
      .getCount();
    return { userLikesCount, userFavoriteCount };
  }
}
