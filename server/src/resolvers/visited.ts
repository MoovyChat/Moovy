import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { conn } from '../dataSource';

import { Visited } from '../entities/Visited';

@Resolver()
export class VisitedResolver {
  @Query(() => [Visited])
  getAllVisited(): Promise<Visited[]> {
    return Visited.find();
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
    console.log(detail);
    return detail;
  }
}
