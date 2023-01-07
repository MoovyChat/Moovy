import { Arg, Query, Resolver } from 'type-graphql';

import { Notifications } from '../entities/Notifications';

@Resolver()
export class NotificationsResolver {
  @Query(() => [Notifications])
  getAllNotifications(): Promise<Notifications[]> {
    return Notifications.find();
  }

  @Query(() => [Notifications])
  getUserNotifications(@Arg('uid') uid: string): Promise<Notifications[]> {
    return Notifications.find({ where: { userId: uid } });
  }
}
