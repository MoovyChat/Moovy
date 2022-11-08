import { conn } from '../dataSource';
import {
  Query,
  Resolver,
  Arg,
  Mutation,
  InputType,
  Field,
  Int,
  ObjectType,
  Ctx,
} from 'type-graphql';
import { MyContext } from '../types';
import _ from 'lodash';
import { User } from '../entities/User';
import { Comment } from '../entities/Comment';
import { MovieStats } from '../entities/MovieStats';
import { Movie } from '../entities/Movie';
import { Reply } from '../entities/Reply';
import { COOKIE_NAME } from '../../constants';

@InputType()
class UserInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  nickname: string;
  @Field()
  photoUrl: string;
}

@ObjectType()
class ErrorField {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class NickNameResponse {
  @Field(() => [ErrorField], { nullable: true })
  errors?: ErrorField[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class FullUserMovieStats {
  @Field()
  user: User;
  @Field()
  movie: Movie;
  @Field({ nullable: true })
  movieStats: MovieStats;
}

@ObjectType()
class LikedMovieObject {
  @Field()
  like: boolean;
  @Field()
  movieId: string;
  @Field()
  userId: string;
  @Field()
  movieName: string;
}

@ObjectType()
class FavMovieObject {
  @Field()
  favorite: boolean;
  @Field()
  movieId: string;
  @Field()
  userId: string;
  @Field()
  movieName: string;
}

@ObjectType()
class FullUserObject {
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => Int, { defaultValue: 0 })
  totalLikes: number;
  @Field(() => Int, { defaultValue: 0 })
  totalComments: number;
  @Field(() => Int, { defaultValue: 0 })
  totalWatched: number;
  @Field(() => [LikedMovieObject], { nullable: true })
  likedTitles?: LikedMovieObject[];
  @Field(() => [FavMovieObject], { nullable: true })
  favTitles?: FavMovieObject[];
}

@ObjectType()
class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;
  @Field({ nullable: true })
  error?: string;
}

@ObjectType()
class NicKNameFormat {
  @Field()
  name: string;
}

@ObjectType()
class PaginatedUserComments {
  @Field()
  id: string;
  @Field(() => User)
  user: User;
  @Field(() => [Comment])
  comments: Comment[];
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(): Promise<User[]> {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  getUser(@Arg('uid') uid: string): Promise<User | null> {
    return User.findOne({ where: { id: uid } });
  }

  @Mutation(() => User, { nullable: true })
  getUserByNickName(@Arg('nickname') nickname: string): Promise<User | null> {
    return User.findOne({ where: { nickname } });
  }

  @Query(() => FullUserObject, { nullable: true })
  async getUserStatistics(
    @Arg('uid') uid: string
  ): Promise<FullUserObject | null> {
    let userStats: FullUserObject = {
      user: undefined,
      favTitles: undefined,
      likedTitles: undefined,
      totalComments: 0,
      totalLikes: 0,
      totalWatched: 0,
    };
    const queryRunner = conn.createQueryRunner();
    // establish real database connection using our new query runner
    await queryRunner.connect();
    // lets now open a new transaction:
    await queryRunner.startTransaction();
    try {
      //User
      const user = await User.findOne({ where: { id: uid } });
      //Total comments
      const userCommentCount = await Comment.count({
        where: { commentedUserId: user?.id },
      });
      const userReplyCount = await Reply.count({
        where: { commentedUserId: user?.id },
      });
      //Total likes
      let cs = 0;
      let rs = 0;
      let commentSum = await conn
        .getRepository(Comment)
        .createQueryBuilder('comment')
        .select('SUM(comment.likesCount)', 'sum')
        .where('comment.commentedUserId = :uid', { uid })
        .getRawOne();
      if (commentSum.sum) cs = parseInt(commentSum.sum);
      else cs = 0;
      let replySum = await conn
        .getRepository(Reply)
        .createQueryBuilder('reply')
        .select('SUM(reply.likesCount)', 'sum')
        .where('reply.commentedUserId = :uid', { uid })
        .getRawOne();
      if (replySum.sum) rs = parseInt(replySum.sum);
      else rs = 0;
      // Total watched movie count
      const movieCount = user?.watchedMovies ? user?.watchedMovies?.length : 0;

      const likedMovies = await conn
        .getRepository(MovieStats)
        .createQueryBuilder('ms')
        .leftJoinAndSelect('ms.movie', 'm', 'ms.movieId = m.id')
        .select('ms.like', 'like')
        .addSelect('ms.movieId', 'movieId')
        .addSelect('ms.userId', 'userId')
        .addSelect('m.name', 'movieName')
        .where('ms.like = :like', { like: true })
        .andWhere('ms.userId = :uid', { uid })
        .orderBy('ms.updatedAt', 'DESC')
        .getRawMany();

      // Favorite movies
      const favMovies = await conn
        .getRepository(MovieStats)
        .createQueryBuilder('ms')
        .leftJoinAndSelect('ms.movie', 'm', 'ms.movieId = m.id')
        .select('ms.favorite', 'favorite')
        .addSelect('ms.movieId', 'movieId')
        .addSelect('ms.userId', 'userId')
        .addSelect('m.name', 'movieName')
        .where('ms.favorite = :fav', { fav: true })
        .andWhere('ms.userId = :uid', { uid })
        .orderBy('ms.updatedAt', 'DESC')
        .getRawMany();
      // commit transaction now:
      await queryRunner.commitTransaction();
      userStats = {
        user: user!,
        totalWatched: movieCount,
        totalLikes: cs + rs,
        totalComments: userCommentCount + userReplyCount,
        likedTitles: likedMovies,
        favTitles: favMovies,
      };
      return userStats;
    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release query runner which is manually created:
      await queryRunner.release();
    }
    return userStats;
  }

  @Mutation(() => [NicKNameFormat], { nullable: true, defaultValue: [] })
  async getTopThreeUserNames(
    @Arg('search') search: string
  ): Promise<NicKNameFormat[] | null> {
    const names: NicKNameFormat[] = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .select('user.nickname', 'name')
      .where('LOWER(user.nickname) like LOWER(:name)', { name: `%${search}%` })
      .orderBy('LOWER(user.nickname)', 'ASC')
      .limit(3)
      .getRawMany();
    return names;
  }

  @Mutation(() => User, { nullable: true })
  getUserMut(@Arg('uid') uid: string): Promise<User | null> {
    return User.findOne({ where: { id: uid } });
  }

  @Query(() => [Comment], { nullable: true })
  getAllCommentsMadeByUser(@Arg('uid') uid: string): Promise<Comment[] | null> {
    let allComments;
    try {
      const user = User.findOne({ where: { id: uid } });
      user.then((res) => {
        if (res) {
          allComments = res.comments;
          return allComments;
        } else return undefined;
      });
      allComments;
    } catch (err) {
      console.log(err);
    }
    return new Promise(() => {});
  }

  @Query(() => PaginatedUserComments, { nullable: true })
  async getCommentsOfTheUser(
    @Arg('uid') uid: string
  ): Promise<PaginatedUserComments | null> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) throw new Error('User not found');
    const comments = await conn
      .getRepository(Comment)
      .createQueryBuilder('c')
      .innerJoinAndSelect(
        'c.commentedUser',
        'user',
        'user.id = c.commentedUserId'
      )
      .where('c.commentedUserId = :uid', { uid })
      .getMany();
    return { id: uid, user, comments };
  }

  @Query(() => FullUserMovieStats, { nullable: true })
  async getUserMovieStatus(@Arg('uid') uid: string, @Arg('mid') mid: string) {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) throw new Error('User not found');
    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) throw new Error('Movie not found');
    const movieStats = await MovieStats.findOne({
      where: { userId: uid, movieId: mid },
    });
    if (!movieStats) throw new Error('Stats not found');
    return { user, movie, movieStats };
  }

  @Mutation(() => User, { nullable: true })
  async createUser(@Arg('options') options: UserInput) {
    let user;
    try {
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            id: options.id,
            name: options.name,
            email: options.email,
            photoUrl: options.photoUrl,
            nickname: options.nickname,
          },
        ])
        .returning('*')
        .execute();
      user = result.raw[0];
    } catch (err) {
      console.log(err);
    }
    return user;
  }

  @Mutation(() => NickNameResponse)
  async updateUserProfilePhoto(
    @Arg('uid') uid: string,
    @Arg('url') url: string
  ): Promise<NickNameResponse> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) {
      return {
        errors: [
          {
            field: 'user',
            message: 'User not found',
          },
        ],
      };
    }

    if (url.length < 0) {
      return {
        errors: [
          {
            field: 'empty nick name',
            message: 'URL should not be empty',
          },
        ],
      };
    }

    if (typeof url !== undefined) {
      await User.update({ id: uid }, { photoUrl: url });
    }
    return {
      user,
    };
  }

  @Mutation(() => NickNameResponse)
  async updateUserNickName(
    @Arg('uid') uid: string,
    @Arg('nickname', () => String, { nullable: true }) nickname: string
  ): Promise<NickNameResponse> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) {
      return {
        errors: [
          {
            field: 'user',
            message: 'User not found',
          },
        ],
      };
    }

    if (nickname.length < 3) {
      return {
        errors: [
          {
            field: 'empty nick name',
            message: 'Username should be at-least 3 characters long',
          },
        ],
      };
    }

    const nickNameExist = await User.findOne({ where: { nickname } });
    if (nickNameExist) {
      return {
        errors: [
          {
            field: 'nickname',
            message: 'Username already exists',
          },
        ],
      };
    }

    if (typeof nickname !== undefined) {
      await User.update({ id: uid }, { nickname });
    }
    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  async addMovieIdToTheUserWatchList(
    @Arg('mid') mid: string,
    @Arg('uid') uid: string
  ): Promise<boolean> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) throw new Error('User not found');
    else {
      let user = await User.findOne({ where: { id: uid } });
      let watchedMovies = user?.watchedMovies;
      let newList = _.union(watchedMovies, [mid]);
      let res = await conn
        .createQueryBuilder()
        .update(User)
        .set({ watchedMovies: newList })
        .where('id=:uid', { uid })
        .execute();
      if (res && res.affected && res.affected > 0) return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('uid') uid: string): Promise<boolean> {
    await User.delete(uid);
    return true;
  }

  @Query(() => User, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<User | null> {
    // User is not logged in.
    console.log(req.session);
    if (!req.session.userId) return null;
    const user = await User.findOne({ where: { id: req.session.userId } });
    return user;
  }

  @Mutation(() => UserResponse, { nullable: true })
  async login(
    @Arg('uid') uid: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({ where: { id: uid } });
    if (!user) return { error: 'User does not exist' };
    req.session.userId = user!.id;
    return { user };
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext): Promise<boolean> {
    return new Promise((resolve) => {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        res.clearCookie(COOKIE_NAME);
        resolve(true);
      });
    });
  }
}
