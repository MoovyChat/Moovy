import 'reflect-metadata';

import {
  Mutation,
  Query,
  Resolver,
  Arg,
  ObjectType,
  Field,
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

@Resolver()
export class FollowResolver {
  @Mutation(() => Follow, { nullable: true })
  async toggleFollow(
    @Arg('uid') uid: string,
    @Arg('followerId') followerId: string,
    @Arg('follow') follow: boolean
  ): Promise<Follow | null> {
    const isExist = await Follow.findOne({
      where: { userUid: uid, followerUid: followerId },
    });
    var result;
    if (!isExist) {
      const res = await conn
        .createQueryBuilder()
        .insert()
        .into(Follow)
        .values({
          userUid: uid,
          followerUid: followerId,
          follows: follow,
        })
        .returning('*')
        .execute();
      result = res.raw[0];
    } else {
      const res = await conn
        .createQueryBuilder()
        .update(Follow)
        .set({ follows: follow })
        .where('userUid = :uid', { uid })
        .andWhere('followerUid = :followerId', { followerId })
        .returning('*')
        .execute();
      result = res.raw[0];
    }
    return result;
  }

  // Query to know the loggedIn user is following the other user.
  // uid - Logged in user.
  // fid - Other user.
  @Query(() => Boolean, { defaultValue: false })
  async amIFollowingThisUser(@Arg('uid') uid: string, @Arg('fid') fid: string) {
    const record = await Follow.findOne({
      where: { userUid: fid, followerUid: uid },
    });
    if (!record) return false;
    return record.follows;
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
