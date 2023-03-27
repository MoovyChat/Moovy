import { Movie } from '../entities/Movie';
import { Title } from '../entities/Title';
import {
  Arg,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { conn } from '../dataSource';
import { Users } from '../entities/Users';

import { Visited } from '../entities/Visited';

@ObjectType()
class VisitedObject {
  @Field(() => Int)
  count: number;
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  page: number;
  @Field(() => [Visited], { nullable: true })
  visited: Visited[] | null;
}

@ObjectType()
class TrendingObject {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => Int)
  viewsCount: number;
}

@ObjectType()
class TrendingOutput {
  @Field(() => [TrendingObject])
  movies: TrendingObject[];
  @Field(() => [TrendingObject])
  shows: TrendingObject[];
}
@Resolver()
export class VisitedResolver {
  @Query(() => [Visited])
  getAllVisited(): Promise<Visited[]> {
    return Visited.find();
  }

  @Query(() => TrendingOutput, { nullable: true })
  async getTrendingTitles(
    @Arg('limit', () => Int) limit: number
  ): Promise<TrendingOutput | null> {
    const movieRes = await conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .innerJoin(Movie, 'movie', 'movie.titleId=title.id')
      .where('movie.viewsCount > 0')
      .andWhere('title.type = :type', { type: 'movie' })
      .select('title.title', 'title')
      .addSelect('title.id', 'id')
      .addSelect('movie.viewsCount', 'viewsCount')
      .orderBy('movie.viewsCount', 'DESC')
      .limit(limit)
      .getRawMany();

    const showRes = await conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .innerJoin(Movie, 'show', 'show.titleId=title.id')
      .where('show."viewsCount" > 0')
      .andWhere('title.type = :type', { type: 'show' })
      .select('title.title', 'title')
      .addSelect('title.id', 'id')
      .addSelect('SUM(show."viewsCount")', 'viewsCount')
      .groupBy('title.id')
      .orderBy('"viewsCount"', 'DESC')
      .limit(limit)
      .getRawMany();

    const movies = movieRes.map((movie) => ({
      id: movie.id,
      title: movie.title,
      viewsCount: movie.viewsCount,
    }));

    const shows = showRes.map((show) => ({
      id: show.id,
      title: show.title,
      viewsCount: show.viewsCount,
    }));

    return { movies, shows };
  }

  // Gets all the movies watched by the user.
  @Query(() => VisitedObject, { nullable: true })
  async getUserViewHistory(
    @Arg('uid') uid: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<VisitedObject | null> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) return null;
    const query = conn
      .getRepository(Visited)
      .createQueryBuilder('v')
      .where('v.userId = :uid', { uid: user.id });
    const count = await query.getCount();
    const visited = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('v.updatedAt', 'DESC')
      .getMany();
    return {
      count,
      visited,
      page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }

  // Used for retrieving the last visited time of the movie watched by the user.
  @Query(() => Visited, { nullable: true })
  async getVisited(
    @Arg('uid') uid: string,
    @Arg('mid') mid: string
  ): Promise<Visited | null> {
    const item = await Visited.findOne({
      where: { userId: uid, movieId: mid },
    });
    return item;
  }

  @Mutation(() => Visited, { nullable: true })
  async insertVisited(
    @Arg('uid') uid: string,
    @Arg('mid') mid: string,
    @Arg('id') id: string,
    @Arg('time') time: number
  ) {
    let detail;
    await conn.transaction(async (manager) => {
      const item = await Visited.findOne({
        where: { userId: uid, movieId: mid },
      });
      const history = item ? item.history : [];
      let newHistory: string[] = [];
      let newObj = {
        id,
        visitTime: Date.now(),
        watchTime: 5,
      };
      if (history.length === 0) {
        newHistory = [...newHistory, JSON.stringify(newObj)];
      } else {
        let found = false;
        newHistory = history.map((h) => {
          let hObj: any = JSON.parse(h);
          if (hObj.id === id) {
            found = true;
            let wTime = hObj.watchTime;
            wTime += time;
            let newObj = { ...hObj, watchTime: wTime };
            return JSON.stringify(newObj);
          } else return h;
        });
        if (!found) {
          newHistory = [...newHistory, JSON.stringify(newObj)];
        }
      }
      await manager.getRepository(Visited).upsert(
        [
          {
            userId: uid,
            movieId: mid,
            history: newHistory,
            visitCount: newHistory.length,
          },
        ],
        {
          conflictPaths: ['userId', 'movieId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      detail = item;
    });
    return detail;
  }
}
