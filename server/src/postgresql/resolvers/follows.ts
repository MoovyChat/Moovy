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
            userId: uid,
            followerId: followerId,
            follows: follow,
          },
        ],
        {
          conflictPaths: ['userId', 'followerId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      result = res.raw[0];
      const userRepo = manager.getRepository(User);
      if (result && follow) {
        await userRepo.increment({ id: uid }, 'followerCount', 1);
        await userRepo.increment({ id: followerId }, 'followingCount', 1);
      } else if (result && !follow) {
        await userRepo.decrement({ id: uid }, 'followerCount', 1);
        await userRepo.decrement({ id: followerId }, 'followingCount', 1);
      }
    });
    return {
      ...result,
      userId: uid,
      followerId: followerId,
      follows: follow,
    };
  }
  // Query to know the loggedIn user is following the other user.
  // uid - Logged in user.
  // fid - Other user.
  @Mutation(() => Boolean, { defaultValue: false })
  async amIFollowingThisUser(@Arg('uid') uid: string, @Arg('fid') fid: string) {
    const record = await Follow.findOne({
      where: { userId: fid, followerId: uid },
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

  @Query(() => FollowingUsers, { nullable: true })
  async getFollowers(@Arg('uid') uid: string): Promise<FollowingUsers | null> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return null;
    const followers: User[] = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoin('user.followers', 'followers')
      .where('followers.userId = :uid', { uid })
      .andWhere('followers.follows = true')
      .select('user.id', 'uid')
      .addSelect('user.name', 'name')
      .addSelect('user.email', 'email')
      .addSelect('user.photoUrl', 'photoUrl')
      .addSelect('user.nickname', 'nickname')
      .addSelect('user.watchedMovies', 'watchedMovies')
      .addSelect('user.joinedAt', 'joinedAt')
      .addSelect('user.updatedAt', 'updatedAt')
      .addSelect('user.deletedAt', 'deletedAt')
      .andWhere('user.id = followers.followerId')
      .getRawMany();
    return { user, followers };
  }
}
