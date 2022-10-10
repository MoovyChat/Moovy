import 'reflect-metadata';
import { FOLLOW_UPDATE } from '../../constants';

import {
  Mutation,
  Query,
  Resolver,
  Arg,
  ObjectType,
  Field,
  PubSub,
  PubSubEngine,
  Int,
  Subscription,
  Root,
} from 'type-graphql';
import { conn } from '../dataSource';
import { Follow } from '../entities/Follow';
import { User } from '../entities/User';

@ObjectType()
class FollowingUsers {
  @Field(() => User, { nullable: true })
  user: User;
  @Field(() => [User], { nullable: true })
  followers: User[];
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
    @Arg('followerId') followerId: string,
    @Arg('follow') follow: boolean
  ): Promise<Follow | null> {
    var result: any;
    await conn.transaction(async (manager) => {
      const res = await manager.getRepository(Follow).upsert(
        [
          {
            userUid: uid,
            followerUid: followerId,
            follows: follow,
          },
        ],
        {
          conflictPaths: ['userUid', 'followerUid'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      result = res.raw[0];
      const userRepo = manager.getRepository(User);
      if (result && follow) {
        await userRepo.increment({ uid }, 'followerCount', 1);
        await userRepo.increment({ uid: followerId }, 'followingCount', 1);
      } else if (result && !follow) {
        await userRepo.decrement({ uid }, 'followerCount', 1);
        await userRepo.decrement({ uid: followerId }, 'followingCount', 1);
      }
    });
    return {
      ...result,
      userUid: uid,
      followerUid: followerId,
      follows: follow,
    };
  }
  // Query to know the loggedIn user is following the other user.
  // uid - Logged in user.
  // fid - Other user.
  @Mutation(() => Boolean, { defaultValue: false })
  async amIFollowingThisUser(@Arg('uid') uid: string, @Arg('fid') fid: string) {
    const record = await Follow.findOne({
      where: { userUid: fid, followerUid: uid },
    });
    if (!record) return false;
    return record.follows!;
  }

  @Mutation(() => UserFollowStats, { nullable: true })
  async getUserFollowStats(
    @Arg('uid') uid: string
  ): Promise<UserFollowStats | null> {
    const user = await User.findOne({
      where: { uid },
    });
    if (!user) return null;
    return {
      followerCount: user?.followerCount!,
      followingCount: user?.followingCount!,
    };
  }

  @Query(() => FollowingUsers, { nullable: true })
  async getFollowers(@Arg('uid') uid: string): Promise<FollowingUsers | null> {
    const user = await User.findOne({ where: { uid } });
    if (!user) return null;
    const followers: User[] = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoin('user.followers', 'followers')
      .where('followers.userUid = :uid', { uid })
      .andWhere('followers.follows = true')
      .select('user.uid', 'uid')
      .addSelect('user.name', 'name')
      .addSelect('user.email', 'email')
      .addSelect('user.photoUrl', 'photoUrl')
      .addSelect('user.nickname', 'nickname')
      .addSelect('user.watchedMovies', 'watchedMovies')
      .addSelect('user.joinedAt', 'joinedAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .andWhere('user.uid = followers.followerUid')
      .getRawMany();
    console.log(followers);
    return { user, followers };
  }
}
