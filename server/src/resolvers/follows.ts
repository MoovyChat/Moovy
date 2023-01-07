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
import { Notifications } from '../entities/Notifications';
import { User } from '../entities/User';

@ObjectType()
class getFollowers {
  @Field(() => User, { nullable: true })
  user: User;
  @Field(() => [User], { nullable: true })
  followers: User[];
}

@ObjectType()
class getFollowings {
  @Field(() => User, { nullable: true })
  user: User;
  @Field(() => [User], { nullable: true })
  followings: User[];
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
      const res = await manager.getRepository(Follow).upsert(
        [
          {
            userId: uid,
            followingId: followingId,
            follows: follow,
          },
        ],
        {
          conflictPaths: ['userId', 'followingId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      result = res.raw[0];
      const userRepo = manager.getRepository(User);
      const notificationRepo = manager.getRepository(Notifications);
      if (result && follow) {
        await userRepo.increment({ id: followingId }, 'followerCount', 1);
        await userRepo.increment({ id: uid }, 'followingCount', 1);
        const follower = await userRepo.findOne({
          where: { id: uid },
        });
        const message = `${follower?.nickname} stated following you`;
        await notificationRepo.insert([
          {
            userId: followingId,
            fromUser: uid,
            isRead: false,
            message: message,
            fromUserPhotoUrl: follower?.photoUrl,
          },
        ]);
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
    const user = await User.findOne({
      where: { id: uid },
    });
    if (!user) return null;
    return {
      followerCount: user?.followerCount!,
      followingCount: user?.followingCount!,
    };
  }

  @Mutation(() => getFollowers, { nullable: true })
  async getFollowers(@Arg('uid') uid: string): Promise<getFollowers | null> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return null;
    const followers: User[] = await conn
      .getRepository(User)
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
      .andWhere('user.id = followers.userId')
      .getRawMany();
    return { user, followers };
  }

  @Mutation(() => getFollowings, { nullable: true })
  async getFollowings(@Arg('uid') uid: string): Promise<getFollowings | null> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return null;
    const followings: User[] = await conn
      .getRepository(User)
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
      .andWhere('user.id = followers.followingId')
      .getRawMany();
    return { user, followings };
  }
}
