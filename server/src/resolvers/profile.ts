import 'reflect-metadata';

import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { conn } from '../dataSource';
import { Follow } from '../entities/Follow';
import { Movie } from '../entities/Movie';
import { MovieStats } from '../entities/MovieStats';
import { Profile } from '../entities/Profile';
import { User } from '../entities/User';
import { Visited } from '../entities/Visited';

@ObjectType()
@InputType()
class InputArgs {
  @Field()
  uid: string;
  @Field()
  nickname: string;
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  bio: string;
  @Field()
  dob: string;
  @Field()
  gender: string;
}

@ObjectType()
class FollowerObject {
  @Field()
  id: string;
  @Field()
  followerCount: number;
  @Field(() => [User], { nullable: true })
  followers: User[];
}

@ObjectType()
class FollowingObject {
  @Field()
  id: string;
  @Field()
  followingCount: number;
  @Field(() => [User], { nullable: true })
  following: User[];
}

@ObjectType()
class LikesMObject {
  @Field()
  id: string;
  @Field()
  likesCount: number;
  @Field(() => [Movie], { nullable: true })
  likes: Movie[];
}

@ObjectType()
class FavoriteObject {
  @Field()
  id: string;
  @Field()
  favCount: number;
  @Field(() => [Movie], { nullable: true })
  favorites: Movie[];
}

@ObjectType()
class HistoryObject {
  @Field()
  id: string;
  @Field()
  historyCount: number;
  @Field(() => [Visited], { nullable: true })
  history: Visited[];
  @Field(() => [Movie], { nullable: true })
  recentMovies: Movie[];
}

@ObjectType()
class FullMiniUser {
  @Field()
  id: string;
  @Field(() => Profile, { nullable: true })
  profile: Profile | null;
  @Field(() => FollowerObject, { nullable: true })
  followers: FollowerObject | null;
  @Field(() => FollowingObject, { nullable: true })
  following: FollowingObject | null;
  @Field(() => LikesMObject, { nullable: true })
  likes: LikesMObject | null;
  @Field(() => FavoriteObject, { nullable: true })
  favorites: FavoriteObject | null;
  @Field(() => HistoryObject, { nullable: true })
  history: HistoryObject | null;
}

@Resolver()
export class ProfileResolver {
  @Query(() => Profile, { nullable: true })
  async getUserProfile(@Arg('uid') uid: string) {
    let data = await Profile.findOne({ where: { userId: uid } });
    return data;
  }

  // Get the userProfile, fav and liked titles, followers/Following  and History.
  @Query(() => FullMiniUser, { nullable: true })
  async getFullUserProfile(
    @Arg('uid') uid: string
  ): Promise<FullMiniUser | null> {
    let profileData: Profile | null = null;
    let followersObjData: FollowerObject | null = null;
    let followingObjData: FollowingObject | null = null;
    let likesData: LikesMObject | null = null;
    let favoritesData: FavoriteObject | null = null;
    let historyData: HistoryObject | null = null;

    await conn.transaction(async (manager) => {
      // Initialize Repositories.
      let profileRepo = manager.getRepository(Profile);
      let userRepo = manager.getRepository(User);
      let followRepo = manager.getRepository(Follow);
      let MovieStatRepo = manager.getRepository(MovieStats);
      let movieRepo = manager.getRepository(Movie);
      let VisitedRepo = manager.getRepository(Visited);

      // Get the data from repositories.

      //Profile data.
      profileData = await profileRepo.findOne({ where: { userId: uid } });

      // Follow data.
      let followQB1 = followRepo.createQueryBuilder('f');
      let followQB2 = followRepo.createQueryBuilder('f');
      let followers = followQB1
        .where('f.followingId = :uid', { uid })
        .andWhere('f.follows = true');
      let following = followQB2
        .where('f.userId = :uid', { uid })
        .andWhere('f.follows = true');
      let followerCount = await followers.getCount();
      let followersData = await followers.limit(3).getMany();
      let followingCount = await following.getCount();
      let followingData = await following.limit(3).getMany();
      let followersUserData: User[] = [];
      let followingUserData: User[] = [];
      followersData.map(async (data) => {
        let userId = data.userId;
        let userInfo = await userRepo.findOne({ where: { id: userId } });
        userInfo && followersUserData.push(userInfo);
      });
      followingData.map(async (data) => {
        let userId = data.followingId;
        let userInfo = await userRepo.findOne({ where: { id: userId } });
        userInfo && followingUserData.push(userInfo);
      });
      followersObjData = {
        id: uid,
        followerCount,
        followers: followersUserData,
      };
      followingObjData = {
        id: uid,
        followingCount,
        following: followingUserData,
      };
      // Fav and liked titles.
      let movieQB1 = MovieStatRepo.createQueryBuilder('m');
      let movieQB2 = MovieStatRepo.createQueryBuilder('m');
      let movieQBData1 = movieQB1.where('m.userId = :uid', { uid });
      let movieQBData2 = movieQB2.where('m.userId = :uid', { uid });
      let favs = movieQBData1.andWhere('m.favorite = :r', { r: true });
      let likes = movieQBData2.andWhere('m.like = :r', { r: true });
      let favCount = await favs.getCount();
      let likesCount = await likes.getCount();
      let top3Fav = await favs.limit(3).getMany();
      let top3Like = await likes.limit(3).getMany();
      let favMovies: Movie[] = [];
      let likedMovies: Movie[] = [];
      let recentMovies: Movie[] = [];
      top3Fav.map(async (stat) => {
        let movieId = stat.movieId;
        let movie = await movieRepo.findOne({ where: { id: movieId } });
        movie && favMovies.push(movie);
      });
      top3Like.map(async (stat) => {
        let movieId = stat.movieId;
        let movie = await movieRepo.findOne({ where: { id: movieId } });
        movie && likedMovies.push(movie);
      });
      likesData = {
        id: uid,
        likesCount,
        likes: likedMovies,
      };
      favoritesData = {
        id: uid,
        favCount,
        favorites: favMovies,
      };
      // History of watched titles.
      let historyQB = VisitedRepo.createQueryBuilder('v');
      let visitedQBData = historyQB.where('v.userId = :uid', { uid });
      let historyCount = await visitedQBData.getCount();
      let recent3Visited = await visitedQBData
        .orderBy('v.updatedAt', 'DESC')
        .limit(3)
        .getMany();
      recent3Visited.map(async (stat) => {
        let movieId = stat.movieId;
        let movie = await movieRepo.findOne({ where: { id: movieId } });
        movie && recentMovies.push(movie);
      });

      historyData = {
        id: uid,
        historyCount,
        history: recent3Visited,
        recentMovies: recentMovies,
      };
    });

    return {
      id: uid,
      favorites: favoritesData,
      likes: likesData,
      profile: profileData,
      followers: followersObjData,
      following: followingObjData,
      history: historyData,
    };
  }

  @Mutation(() => Profile, { nullable: true })
  async upsertProfile(@Arg('options') options: InputArgs) {
    let data: Profile | null = null;
    await conn.transaction(async (manager) => {
      let repo = manager.getRepository(Profile);
      await repo.upsert(
        [
          {
            userId: options.uid,
            firstname: options.firstname,
            lastname: options.lastname,
            bio: options.bio,
            gender: options.gender,
            dob: options.dob,
          },
        ],
        {
          conflictPaths: ['userId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
      await manager
        .createQueryBuilder()
        .update(User)
        .set({ nickname: options.nickname })
        .where('id = :id', { id: options.uid })
        .execute();
      data = await repo.findOne({ where: { userId: options.uid } });
    });
    return data;
  }
}