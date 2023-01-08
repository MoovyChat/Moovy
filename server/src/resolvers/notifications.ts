import { conn } from '../dataSource';
import { Arg, ObjectType, Query, Resolver, Field } from 'type-graphql';
import { FollowNotifications } from '../entities/FollowNotifications';
import { LikeNotifications } from '../entities/LikeNotifications';

@ObjectType()
class NotificationObject {
  @Field(() => [FollowNotifications], { nullable: true, defaultValue: [] })
  follow: FollowNotifications[];

  @Field(() => [LikeNotifications], { nullable: true, defaultValue: [] })
  like: LikeNotifications[];
}
@Resolver()
export class NotificationsResolver {
  @Query(() => [FollowNotifications])
  getAllNotifications(): Promise<FollowNotifications[]> {
    return FollowNotifications.find();
  }

  @Query(() => NotificationObject, { nullable: true })
  async getUserNotifications(
    @Arg('uid') uid: string
  ): Promise<NotificationObject | null> {
    const followNotifications = await conn
      .getRepository(FollowNotifications)
      .createQueryBuilder('n')
      .where('n.toUserId = :uid', { uid })
      .orderBy('n.createdAt', 'DESC')
      .getMany();
    const likeNotifications = await conn
      .getRepository(LikeNotifications)
      .createQueryBuilder('n')
      .where('n.toUserId = :uid', { uid })
      .orderBy('n.createdAt', 'DESC')
      .getMany();
    return { follow: followNotifications, like: likeNotifications };
  }
}
