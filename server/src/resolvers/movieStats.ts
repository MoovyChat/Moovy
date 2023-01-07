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
  Query,
} from 'type-graphql';

import { Movie } from '../entities/Movie';
import { MovieStats } from '../entities/MovieStats';
import { conn } from '../dataSource';
import { User } from '../entities/User';
import { STATUS_UPDATE } from '../constants';

@ObjectType()
class LikesAndFavObj {
  @Field(() => Int, { defaultValue: 0 })
  userLikesCount: number;
  @Field(() => Int, { defaultValue: 0 })
  userFavoriteCount: number;
}

@ObjectType()
class LikeAndFav {
  @Field(() => Boolean, { nullable: true })
  like: boolean;
  @Field(() => Boolean, { nullable: true })
  favorite: boolean;
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
  @Query(() => MovieStats, { nullable: true })
  async getOnlyUserMovieStats(
    @Arg('uid') uid: string,
    @Arg('mid') mid: string
  ) {
    const res = await MovieStats.findOne({
      where: { movieId: mid, userId: uid },
    });
    return res;
  }

  @Mutation(() => LikeAndFav, { nullable: true })
  async updateUserMovieStats(
    @Arg('uid') uid: string,
    @Arg('mid') mid: string,
    @Arg('options') options: UserMovieOptions,
    @PubSub() pubSub: PubSubEngine
  ): Promise<LikeAndFav | null> {
    let detail: any;
    await conn.transaction(async (manager) => {
      const res = await manager.getRepository(MovieStats).upsert(
        [
          {
            userId: uid,
            movieId: mid,
            like: options.like && options.like,
            favorite: options.favorite && options.favorite,
          },
        ],
        {
          conflictPaths: ['userId', 'movieId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      detail = res.raw[0];
      const movieRepo = manager.getRepository(Movie);
      // Update like count.
      if (detail && options.like === true) {
        await movieRepo.increment({ id: mid }, 'likesCount', 1);
      } else if (detail && options.like === false) {
        await movieRepo.decrement({ id: mid }, 'likesCount', 1);
      }
      // Update fav count.
      if (detail && options.favorite === true) {
        await movieRepo.increment({ id: mid }, 'favCount', 1);
      } else if (detail && options.favorite === false) {
        await movieRepo.decrement({ id: mid }, 'favCount', 1);
      }
    });
    await pubSub.publish(STATUS_UPDATE, mid);
    return {
      like: detail ? detail.like : null,
      favorite: detail ? detail.favorite : null,
    };
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
