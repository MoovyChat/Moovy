import 'reflect-metadata';

import {
  Mutation,
  Query,
  Resolver,
  Arg,
  ObjectType,
  Field,
  Int,
} from 'type-graphql';
import { conn } from '../dataSource';
import { Follow } from '../entities/Follow';
import { FollowNotifications } from '../entities/FollowNotifications';
import { Users } from '../entities/Users';

@ObjectType()
class getFollowers {
  @Field(() => Users, { nullable: true })
  user: Users;
  @Field(() => [Users], { nullable: true })
  followers: Users[];
  @Field(() => Int)
  count: number;
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
class getFollowings {
  @Field(() => Users, { nullable: true })
  user: Users;
  @Field(() => [Users], { nullable: true })
  followings: Users[];
  @Field(() => Int)
  count: number;
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
class UserFollowStats {
  @Field(() => Int, { defaultValue: 0 })
  followingCount: number;
  @Field(() => Int, { defaultValue: 0 })
  followerCount: number;
}

@Resolver()
export class FollowResolver {
  @Mutation(() => Follow, { nullable: true })
  async toggleFollow(
    @Arg('uid') uid: string,
    @Arg('followingId') followingId: string,
    @Arg('follow') follow: boolean
  ): Promise<Follow | null> {
    var result: any;
    if (uid === followingId) return null;
    await conn.transaction(async (manager) => {
      const followStats = await Follow.findOne({
        where: { userId: uid, followingId: followingId },
      });
      const previousUpdateTimeStamp = followStats?.updatedAt;
      const createdTimestamp = followStats?.createdAt;
      const res = await manager.getRepository(Follow).upsert(
        [
          {
            userId: uid,
            followingId: followingId,
            follows: follow,
            blocked: false,
            reported: false,
            updatedAt: new Date(),
          },
        ],
        {
          conflictPaths: ['userId', 'followingId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      result = res.raw[0];
      const userRepo = manager.getRepository(Users);
      const notificationRepo = manager.getRepository(FollowNotifications);
      if (result && follow) {
        await userRepo.increment({ id: followingId }, 'followerCount', 1);
        await userRepo.increment({ id: uid }, 'followingCount', 1);
        const follower = await userRepo.findOne({
          where: { id: uid },
        });
        const message = `${follower?.nickname} stated following you`;
        const now = new Date().getTime();
        const previousTime = previousUpdateTimeStamp?.getTime();
        if (
          (previousTime && now - previousTime > 300000) ||
          previousTime === createdTimestamp?.getTime() ||
          previousTime === null ||
          createdTimestamp === null ||
          createdTimestamp === previousTime ||
          previousTime === undefined ||
          createdTimestamp === undefined
        ) {
          await notificationRepo.insert([
            {
              toUserId: followingId,
              fromUser: follower?.nickname,
              isRead: false,
              message: message,
              fromUserPhotoUrl: follower?.photoUrl,
            },
          ]);
        }
      } else if (result && !follow) {
        await userRepo.decrement({ id: followingId }, 'followerCount', 1);
        await userRepo.decrement({ id: uid }, 'followingCount', 1);
      }
    });
    return {
      ...result,
      userId: uid,
      followingId: followingId,
      follows: follow,
    };
  }

  @Query(() => Boolean, { defaultValue: false })
  async isFollowingUser(@Arg('uid') uid: string, @Arg('fid') fid: string) {
    const record = await Follow.findOne({
      where: { userId: uid, followingId: fid },
    });
    return record?.follows!;
  }
  // Query to know the loggedIn user is following the other user.
  // uid - Logged in user.
  // fid - Other user.
  @Mutation(() => Boolean, { defaultValue: false })
  async amIFollowingThisUser(@Arg('uid') uid: string, @Arg('fid') fid: string) {
    const record = await Follow.findOne({
      where: { userId: uid, followingId: fid },
    });
    if (!record) return false;
    return record.follows!;
  }

  @Mutation(() => UserFollowStats, { nullable: true })
  async getUserFollowStats(
    @Arg('uid') uid: string
  ): Promise<UserFollowStats | null> {
    const user = await Users.findOne({
      where: { id: uid },
    });
    if (!user) return null;
    return {
      followerCount: user?.followerCount!,
      followingCount: user?.followingCount!,
    };
  }

  @Query(() => getFollowers, { nullable: true })
  async getFollowers(
    @Arg('uid') uid: string,
    @Arg('page') page: number,
    @Arg('limit') limit: number
  ): Promise<getFollowers | null> {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) return null;
    const query = await conn
      .getRepository(Users)
      .createQueryBuilder('user')
      .innerJoin('user.followers', 'followers')
      .where('followers.followingId = :uid', { uid })
      .andWhere('followers.follows = true')
      .select('user.id', 'id')
      .addSelect('user.name', 'name')
      .addSelect('user.email', 'email')
      .addSelect('user.photoUrl', 'photoUrl')
      .addSelect('user.nickname', 'nickname')
      .addSelect('user.watchedMovies', 'watchedMovies')
      .addSelect('user.joinedAt', 'joinedAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .andWhere('user.id = followers.userId');
    const count = await query.getCount();
    const followers: Users[] = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('user.nickname', 'ASC')
      .getRawMany();
    return {
      user,
      followers,
      count,
      page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }

  @Query(() => getFollowings, { nullable: true })
  async getFollowings(
    @Arg('uid') uid: string,
    @Arg('page') page: number,
    @Arg('limit') limit: number
  ): Promise<getFollowings | null> {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) return null;
    const query = await conn
      .getRepository(Users)
      .createQueryBuilder('user')
      .innerJoin('user.followings', 'followers')
      .where('followers.userId = :uid', { uid })
      .andWhere('followers.follows = true')
      .select('user.id', 'id')
      .addSelect('user.name', 'name')
      .addSelect('user.email', 'email')
      .addSelect('user.photoUrl', 'photoUrl')
      .addSelect('user.nickname', 'nickname')
      .addSelect('user.watchedMovies', 'watchedMovies')
      .addSelect('user.joinedAt', 'joinedAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .andWhere('user.id = followers.followingId');
    const count = await query.getCount();
    const followings: Users[] = await query.getRawMany();
    return {
      user,
      followings,
      count,
      page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }
}
