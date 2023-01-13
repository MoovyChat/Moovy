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
import { COOKIE_NAME } from '../constants';
import { Follow } from '../entities/Follow';

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
  @Field(() => Int, { defaultValue: 0 })
  totalCommentCount: number;
  @Field(() => Int, { defaultValue: 0 })
  pastCount: number;
  @Field(() => User)
  user: User;
  @Field(() => [Comment])
  comments: Comment[];
  @Field(() => Boolean)
  hasMoreComments: boolean;
  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
class MiniCommentFormat {
  @Field()
  id: string;
  @Field()
  type: string;
  @Field()
  commentedUserId: string;
  @Field()
  createdAt: string;
  @Field()
  updatedAt: string;
}

@ObjectType()
class PaginatedUserReplies {
  @Field(() => Int, { defaultValue: 0 })
  totalCommentCount: number;
  @Field(() => Int, { defaultValue: 0 })
  pastCount: number;
  @Field(() => User)
  user: User;
  @Field(() => [Reply])
  comments: Reply[];
  @Field(() => Boolean)
  hasMoreComments: boolean;
  @Field(() => Int)
  lastPage: number;
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

  @Query(() => User, { nullable: true })
  getUserByUserName(@Arg('nickname') nickname: string): Promise<User | null> {
    return User.findOne({ where: { nickname } });
  }

  @Query(() => [MiniCommentFormat], { nullable: true })
  async getFeed(
    @Arg('uid') uid: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<MiniCommentFormat[] | null> {
    let result: MiniCommentFormat[] = [];
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const queryRunner = conn.createQueryRunner();
    // establish real database connection using our new query runner
    await queryRunner.connect();
    try {
      // lets now open a new transaction:
      await queryRunner.startTransaction();
      const followRepo = conn.getRepository(Follow);
      const commentRepo = conn.getRepository(Comment);
      const replyRepo = conn.getRepository(Reply);
      const ids = await followRepo
        .createQueryBuilder('f')
        .select('f.userId', 'id')
        .where('f.followingId = :uid', { uid })
        .andWhere('f.follows = :f', { f: true })
        .execute();
      const updatedIds = [...ids, { id: uid }];
      console.log(updatedIds);
      await Promise.all(
        updatedIds.map(async (idObject) => {
          let neededUserId = idObject.id;
          // Get comments of that user and also retrieve that user info.
          const _comments: MiniCommentFormat[] = await commentRepo
            .createQueryBuilder('c')
            .select('c.id', 'id')
            .addSelect('c.commentedUserId', 'commentedUserId')
            .addSelect('c.createdAt', 'createdAt')
            .addSelect('c.updatedAt', 'updatedAt')
            .addSelect('c.type', 'type')
            .where('c.commentedUserId = :id', { id: neededUserId })
            .andWhere('c.updatedAt >= :date', { date: thirtyDaysAgo })
            .offset((page - 1) * limit)
            .limit(limit)
            .execute();
          const _replies: MiniCommentFormat[] = await replyRepo
            .createQueryBuilder('r')
            .select('r.id', 'id')
            .addSelect('r.commentedUserId', 'commentedUserId')
            .addSelect('r.type', 'type')
            .addSelect('r.createdAt', 'createdAt')
            .addSelect('r.updatedAt', 'updatedAt')
            .where('r.commentedUserId = :id', { id: neededUserId })
            .andWhere('r.updatedAt >= :date', { date: thirtyDaysAgo })
            .offset((page - 1) * limit)
            .limit(limit)
            .execute();
          result = _.chain(result)
            .concat(_comments)
            .concat(_replies)
            .uniqBy('id')
            .orderBy('updatedAt', 'desc')
            .value();
        })
      );
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release query runner which is manually created:
      await queryRunner.release();
    }
    return result;
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
  async getAllCommentsMadeByUser(
    @Arg('uid') uid: string
  ): Promise<Comment[] | null> {
    let allComments;
    try {
      const user = await User.findOne({ where: { id: uid } });
      if (user) {
        allComments = user.comments;
        return allComments;
      }
    } catch (err) {
      console.log(err);
    }
    return new Promise(() => {});
  }

  @Query(() => PaginatedUserComments, { nullable: true })
  async getCommentsOfTheUser(
    @Arg('uid') uid: string,
    @Arg('time', () => String, { nullable: true }) time: string | null,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1,
    @Arg('ASC', () => Boolean, { defaultValue: true, nullable: true })
    ASC: boolean
  ): Promise<PaginatedUserComments | null> {
    const user = await User.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) throw new Error('User not found');
    const query = conn
      .getRepository(Comment)
      .createQueryBuilder('c')
      .innerJoinAndSelect(
        'c.commentedUser',
        'user',
        'user.id = c.commentedUserId'
      )
      .where('c.commentedUserId = :uid', { uid: user.id });
    let totalCommentCount = await query.getCount();
    if (time && time !== '') {
      query.andWhere('c.createdAt < :time', {
        time: new Date(parseInt(time)),
      });
    }
    const pastCount = await query.getCount();
    const comments = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('c.createdAt', ASC ? 'ASC' : 'DESC')
      .getMany();
    return {
      user,
      comments,
      totalCommentCount,
      pastCount,
      hasMoreComments: comments.length === totalCommentCount + 1,
      lastPage:
        totalCommentCount === 0 ? 1 : Math.ceil(totalCommentCount / limit),
    };
  }

  @Query(() => PaginatedUserReplies, { nullable: true })
  async getRepliesOfTheUser(
    @Arg('uid') uid: string,
    @Arg('time', () => String, { nullable: true }) time: string | null,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1,
    @Arg('ASC', () => Boolean, { defaultValue: true, nullable: true })
    ASC: boolean
  ): Promise<PaginatedUserReplies | null> {
    const user = await User.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) throw new Error('User not found');
    const query = await conn
      .getRepository(Reply)
      .createQueryBuilder('c')
      .innerJoinAndSelect(
        'c.commentedUser',
        'user',
        'user.id = c.commentedUserId'
      )
      .where('c.commentedUserId = :uid', { uid });
    let totalCommentCount = await query.getCount();
    if (time && time !== '') {
      query.andWhere('c.createdAt < :time', {
        time: new Date(parseInt(time)),
      });
    }
    const pastCount = await query.getCount();
    const comments = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('c.createdAt', ASC ? 'ASC' : 'DESC')
      .getMany();
    return {
      user,
      comments,
      totalCommentCount,
      pastCount,
      hasMoreComments: comments.length === totalCommentCount + 1,
      lastPage:
        totalCommentCount === 0 ? 1 : Math.ceil(totalCommentCount / limit),
    };
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
  async updateUserBg(
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
      await User.update({ id: uid }, { bg: url });
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
