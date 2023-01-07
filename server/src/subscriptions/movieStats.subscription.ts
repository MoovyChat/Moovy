import {
  EntitySubscriberInterface,
  EventSubscriber,
  UpdateEvent,
} from 'typeorm';

import { MovieStats } from '../entities/MovieStats';

@EventSubscriber()
export class MovieStatsSubscriber
  implements EntitySubscriberInterface<MovieStats>
{
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return MovieStats;
  }

  /**
   * Called after Movie update.
   */

  afterUpdate(event: UpdateEvent<MovieStats>): void | Promise<any> {
    const { entity, updatedColumns, updatedRelations } = event;
    console.log(entity, updatedColumns, updatedRelations);
  }
}
