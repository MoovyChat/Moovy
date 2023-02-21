import { conn } from '../dataSource';
import {
  Arg,
  ObjectType,
  Query,
  Resolver,
  Field,
  Int,
  Mutation,
  PubSub,
  PubSubEngine,
  Subscription,
  Root,
} from 'type-graphql';
import { FollowNotifications } from '../entities/FollowNotifications';
import { LikeNotifications } from '../entities/LikeNotifications';
import { ADMIN_NOTIFICATION_SUB } from '../constants';
import { AdminNotifications } from '../entities/AdminNotifications';

@ObjectType()
class NotificationObject {
  @Field(() => [FollowNotifications], { nullable: true, defaultValue: [] })
  follow: FollowNotifications[];

  @Field(() => [LikeNotifications], { nullable: true, defaultValue: [] })
  like: LikeNotifications[];
}

@ObjectType()
class NotificationObj {
  @Field(() => [FollowNotifications], { nullable: true, defaultValue: null })
  follow: FollowNotifications;

  @Field(() => [LikeNotifications], { nullable: true, defaultValue: null })
  like: LikeNotifications;
}
@Resolver()
export class NotificationsResolver {
  @Query(() => [FollowNotifications])
  getAllNotifications(): Promise<FollowNotifications[]> {
    return FollowNotifications.find();
  }

  @Query(() => NotificationObject, { nullable: true })
  async getUserNotifications(
    @Arg('uid') uid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<NotificationObject | null> {
    const followNotifications = await conn
      .getRepository(FollowNotifications)
      .createQueryBuilder('n')
      .where('n.toUserId = :uid', { uid })
      .orderBy('n.createdAt', 'DESC')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    const likeNotifications = await conn
      .getRepository(LikeNotifications)
      .createQueryBuilder('n')
      .where('n.toUserId = :uid', { uid })
      .orderBy('n.createdAt', 'DESC')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return { follow: followNotifications, like: likeNotifications };
  }

  @Mutation(() => NotificationObj, { nullable: true })
  async readNotification(
    @Arg('id') id: number,
    @Arg('type') type: string,
    @Arg('uid') uid: string
  ) {
    let follow: FollowNotifications | null = null;
    let like: LikeNotifications | null = null;
    if (type === 'like') {
      const res = await conn
        .createQueryBuilder()
        .update(LikeNotifications)
        .set({ isRead: true })
        .where('id=:id', { id })
        .andWhere('toUserId = :uid', { uid })
        .returning('*')
        .execute();
      like = res.raw[0] as LikeNotifications;
    }
    if (type === 'follow') {
      const res = await conn
        .createQueryBuilder()
        .update(FollowNotifications)
        .set({ isRead: true })
        .where('id=:id', { id })
        .andWhere('toUserId = :uid', { uid })
        .returning('*')
        .execute();
      follow = res.raw[0] as FollowNotifications;
    }
    return { like, follow };
  }

  @Mutation(() => Boolean, { nullable: true })
  async clearNotifications(@Arg('uid') uid: string) {
    await conn
      .createQueryBuilder()
      .delete()
      .from(FollowNotifications)
      .where('toUserId = :uid', { uid })
      .execute();
    await conn
      .createQueryBuilder()
      .delete()
      .from(LikeNotifications)
      .where('toUserId = :uid', { uid })
      .execute();
    return true;
  }

  @Query(() => AdminNotifications)
  async getLatestAdminNotification() {
    return await conn
      .getRepository(AdminNotifications)
      .createQueryBuilder('a')
      .orderBy('a.updatedAt', 'DESC')
      .take(1)
      .getOne();
  }

  @Mutation(() => AdminNotifications)
  async insertAdminNotification(
    @Arg('message') message: string,
    @PubSub() pubSub: PubSubEngine
  ) {
    const status = await conn
      .createQueryBuilder()
      .insert()
      .into(AdminNotifications)
      .values([{ message }])
      .returning('*')
      .execute();
    const result = status.raw[0];
    await pubSub.publish(ADMIN_NOTIFICATION_SUB, { id: result.id });
    return result;
  }

  @Subscription(() => AdminNotifications, {
    topics: ADMIN_NOTIFICATION_SUB,
  })
  async adminNotifications(
    @Root('id') id: string
  ): Promise<AdminNotifications | null> {
    return await AdminNotifications.findOne({ where: { id: id } });
  }
}
