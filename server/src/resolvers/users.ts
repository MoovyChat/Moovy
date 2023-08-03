import { conn } from "../dataSource";
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
} from "type-graphql";
import { MyContext } from "../types";
import _ from "lodash";
import { Users } from "../entities/Users";
import { Comment } from "../entities/Comment";
import { MovieStats } from "../entities/MovieStats";
import { Movie } from "../entities/Movie";
import { Reply } from "../entities/Reply";
import { COOKIE_NAME } from "../constants";
import { Follow } from "../entities/Follow";
import { FeedItem } from "../objectTypes";
import { FeedEdge, PageInfo } from "../pagination";
import {
  FeedConnection,
  ReplyConnection,
  UserCommentsConnection,
} from "../connections";

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
  @Field(() => Users, { nullable: true })
  user?: Users;
}

@ObjectType()
class FullUserMovieStats {
  @Field()
  user: Users;
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
  @Field(() => Users, { nullable: true })
  user?: Users;
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
  @Field(() => Users, { nullable: true })
  user?: Users;
  @Field({ nullable: true })
  error?: string;
}

@ObjectType()
class NicKNameFormat {
  @Field()
  name: string;
  @Field(() => String, { nullable: true })
  fullname: string;
  @Field()
  id: string;
  @Field()
  photoUrl: string;
}

@Resolver()
export class UserResolver {
  @Query(() => [Users])
  users(): Promise<Users[]> {
    return Users.find();
  }

  @Query(() => Users, { nullable: true })
  getUser(@Arg("uid") uid: string): Promise<Users | null> {
    return Users.findOne({ where: [{ id: uid }, { nickname: uid }] });
  }

  @Mutation(() => Users, { nullable: true })
  getUserByNickName(@Arg("nickname") nickname: string): Promise<Users | null> {
    return Users.findOne({ where: { nickname } });
  }

  @Query(() => Users, { nullable: true })
  getUserByUserName(@Arg("nickname") nickname: string): Promise<Users | null> {
    return Users.findOne({ where: { nickname } });
  }

  @Query(() => FeedConnection)
  async getFeed(
    @Arg("uid") uid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after") after: string
  ): Promise<FeedConnection> {
    let result: FeedItem[] = [];
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    const queryRunner = conn.createQueryRunner();
    let intendedCount = first;
    let totalCount = 0;
    // establish real database connection using our new query runner
    await queryRunner.connect();
    try {
      // lets now open a new transaction:
      await queryRunner.startTransaction();
      const ids = await conn
        .getRepository(Follow)
        .createQueryBuilder("f")
        .select("f.followingId", "id")
        .where("f.userId = :uid", { uid })
        .andWhere("f.follows = :f", { f: true })
        .getRawMany();
      const updatedIds = [...ids, { id: uid }];
      const query = `
WITH comment_or_reply AS (
  SELECT
    id,
    "commentedUserId",
    "createdAt",
    "updatedAt",
    type,
    CONCAT("id", ':', "commentedUserId", ':', "updatedAt") AS "compositeKey"
  FROM (
    SELECT
      id,
      "commentedUserId",
      "createdAt",
      "updatedAt",
      type
    FROM comment
    WHERE "commentedUserId" IN (${updatedIds
      .map(({ id }) => `'${id}'`)
      .join(",")})
      AND "updatedAt" >= '${tenDaysAgo.toISOString()}'
    UNION ALL
    SELECT
      id,
      "commentedUserId",
      "createdAt",
      "updatedAt",
      type
    FROM reply
    WHERE "commentedUserId" IN (${updatedIds
      .map(({ id }) => `'${id}'`)
      .join(",")})
      AND "updatedAt" >= '${tenDaysAgo.toISOString()}'
  ) AS combined
)
SELECT *
FROM comment_or_reply
${after ? `WHERE "compositeKey" < '${after}'` : ""}
ORDER BY "updatedAt" DESC, "commentedUserId" ASC, "compositeKey" ASC
LIMIT ${first};

`;

      result = await queryRunner.manager.query(query);
      totalCount = result.length;
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release query runner which is manually created:
      await queryRunner.release();
    }
    const edges: FeedEdge[] = result.map((node) => {
      return {
        node,
        cursor: node.compositeKey,
      } as FeedEdge;
    });
    const pageInfo: PageInfo = {
      hasNextPage: totalCount < intendedCount ? false : true,
      endCursor: result.length > 0 ? result[result.length - 1].id : "",
    };
    let finalRes: FeedConnection = {
      totalCount,
      nodes: result,
      edges,
      pageInfo,
    };
    return finalRes;
  }

  @Query(() => FeedConnection)
  async getFeedWithLikes(
    @Arg("uid") uid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after") after: string
  ): Promise<FeedConnection> {
    let result: FeedItem[] = [];
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
    const queryRunner = conn.createQueryRunner();
    let intendedCount = first;
    let totalCount = 0;
    // establish real database connection using our new query runner
    await queryRunner.connect();
    try {
      // lets now open a new transaction:
      await queryRunner.startTransaction();
      const ids = await conn
        .getRepository(Follow)
        .createQueryBuilder("f")
        .select("f.followingId", "id")
        .where("f.userId = :uid", { uid })
        .andWhere("f.follows = :f", { f: true })
        .getRawMany();
      const updatedIds = [...ids, { id: uid }];
      const query = `
WITH comment_or_reply AS (
  SELECT
    id,
    "commentedUserId",
    "createdAt",
    "updatedAt",
    type,
    CONCAT("id", ':', "commentedUserId", ':', "updatedAt") AS "compositeKey"
  FROM (
    SELECT
      id,
      "commentedUserId",
      "createdAt",
      "updatedAt",
      type
    FROM comment
    WHERE "commentedUserId" IN (${updatedIds
      .map(({ id }) => `'${id}'`)
      .join(",")})
      AND "updatedAt" >= '${tenDaysAgo.toISOString()}'
    UNION ALL
    SELECT
      id,
      "commentedUserId",
      "createdAt",
      "updatedAt",
      type
    FROM reply
    WHERE "commentedUserId" IN (${updatedIds
      .map(({ id }) => `'${id}'`)
      .join(",")})
      AND "updatedAt" >= '${tenDaysAgo.toISOString()}'
  ) AS combined
)
SELECT *
FROM comment_or_reply
${after ? `WHERE "compositeKey" < '${after}'` : ""}
ORDER BY "updatedAt" DESC, "commentedUserId" ASC, "compositeKey" ASC
LIMIT ${first};

`;

      result = await queryRunner.manager.query(query);
      totalCount = result.length;
      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors let's rollback changes we made
      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release query runner which is manually created:
      await queryRunner.release();
    }
    const edges: FeedEdge[] = result.map((node) => {
      return {
        node,
        cursor: node.compositeKey,
      } as FeedEdge;
    });
    const pageInfo: PageInfo = {
      hasNextPage: totalCount < intendedCount ? false : true,
      endCursor: result.length > 0 ? result[result.length - 1].id : "",
    };
    let finalRes: FeedConnection = {
      totalCount,
      nodes: result,
      edges,
      pageInfo,
    };
    return finalRes;
  }

  @Query(() => FullUserObject, { nullable: true })
  async getUserStatistics(
    @Arg("uid") uid: string
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
      const user = await Users.findOne({ where: { id: uid } });
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
        .createQueryBuilder("comment")
        .select("SUM(comment.likesCount)", "sum")
        .where("comment.commentedUserId = :uid", { uid })
        .getRawOne();
      if (commentSum.sum) cs = parseInt(commentSum.sum);
      else cs = 0;
      let replySum = await conn
        .getRepository(Reply)
        .createQueryBuilder("reply")
        .select("SUM(reply.likesCount)", "sum")
        .where("reply.commentedUserId = :uid", { uid })
        .getRawOne();
      if (replySum.sum) rs = parseInt(replySum.sum);
      else rs = 0;
      // Total watched movie count
      const movieCount = 0;

      const likedMovies = await conn
        .getRepository(MovieStats)
        .createQueryBuilder("ms")
        .leftJoinAndSelect("ms.movie", "m", "ms.movieId = m.id")
        .select("ms.like", "like")
        .addSelect("ms.movieId", "movieId")
        .addSelect("ms.userId", "userId")
        .addSelect("m.name", "movieName")
        .where("ms.like = :like", { like: true })
        .andWhere("ms.userId = :uid", { uid })
        .orderBy("ms.updatedAt", "DESC")
        .getRawMany();

      // Favorite movies
      const favMovies = await conn
        .getRepository(MovieStats)
        .createQueryBuilder("ms")
        .leftJoinAndSelect("ms.movie", "m", "ms.movieId = m.id")
        .select("ms.favorite", "favorite")
        .addSelect("ms.movieId", "movieId")
        .addSelect("ms.userId", "userId")
        .addSelect("m.name", "movieName")
        .where("ms.favorite = :fav", { fav: true })
        .andWhere("ms.userId = :uid", { uid })
        .orderBy("ms.updatedAt", "DESC")
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
    @Arg("search") search: string
  ): Promise<NicKNameFormat[] | null> {
    const userRepository = conn.getRepository(Users);
    const query = `
  SELECT "user"."id" AS "id", "user"."photoUrl" AS "photoUrl", "user"."nickname" AS "name", "profile"."fullname" AS "fullname"
  FROM "users" "user" LEFT JOIN "profile" "profile" ON "user"."id" = "profile"."userId" AND ("profile"."deletedAt" IS NULL)
  WHERE (LOWER("user"."nickname") LIKE LOWER($1)) AND ("user"."deletedAt" IS NULL)
  ORDER BY LOWER("user"."nickname") ASC
  LIMIT 3
`;
    const names: NicKNameFormat[] = await userRepository.query(query, [
      `%${search}%`,
    ]);
    return names;
  }

  @Mutation(() => Users, { nullable: true })
  getUserMut(@Arg("uid") uid: string): Promise<Users | null> {
    return Users.findOne({ where: { id: uid } });
  }

  @Query(() => [Comment], { nullable: true })
  async getAllCommentsMadeByUser(
    @Arg("uid") uid: string
  ): Promise<Comment[] | null> {
    let allComments;
    try {
      const user = await Users.findOne({ where: { id: uid } });
      if (user) {
        allComments = user.comments;
        return allComments;
      }
    } catch (err) {
      console.log(err);
    }
    return new Promise(() => {});
  }

  @Query(() => UserCommentsConnection)
  async getCommentsOfTheUser(
    @Arg("uid") uid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after", () => String, { nullable: true }) after: string
  ): Promise<UserCommentsConnection> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    const query = conn
      .getRepository(Comment)
      .createQueryBuilder("c")
      .innerJoinAndSelect(
        "c.commentedUser",
        "user",
        "user.id = c.commentedUserId"
      )
      .where("c.commentedUserId = :uid", { uid: user?.id });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere("c.updatedAt < :cursor", { cursor: new Date(after) });
    }

    // Get `first` number of replies, plus 1 to check for next page
    const comments = await query
      .orderBy("c.updatedAt", "DESC")
      .take(first + 1)
      .getMany();

    const nodes = comments.slice(0, first);
    const hasNextPage = comments.length > first;
    const endCursor =
      comments.length === 0
        ? String(totalCount)
        : String(comments[comments.length - 1].updatedAt);
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.updatedAt),
    }));

    const pageInfo: PageInfo = {
      endCursor,
      hasNextPage,
    };

    return {
      totalCount,
      pageInfo,
      edges,
      nodes,
    };
  }

  @Query(() => ReplyConnection)
  async getRepliesOfTheUser(
    @Arg("uid") uid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after", () => String, { nullable: true }) after: string
  ): Promise<ReplyConnection> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    const query = conn
      .getRepository(Reply)
      .createQueryBuilder("r")
      .innerJoinAndSelect(
        "r.commentedUser",
        "user",
        "user.id = r.commentedUserId"
      )
      .where("r.commentedUserId = :uid", { uid: user?.id });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere("r.updatedAt < :cursor", { cursor: new Date(after) });
    }

    // Get `first` number of replies, plus 1 to check for next page
    const replies = await query
      .orderBy("r.updatedAt", "DESC")
      .take(first + 1)
      .getMany();

    const nodes = replies.slice(0, first);
    const hasNextPage = replies.length > first;
    const endCursor =
      replies.length === 0
        ? String(totalCount)
        : String(replies[replies.length - 1].updatedAt);
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.updatedAt),
    }));

    const pageInfo: PageInfo = {
      endCursor,
      hasNextPage,
    };

    return {
      totalCount,
      pageInfo,
      edges,
      nodes,
    };
  }

  @Query(() => FullUserMovieStats, { nullable: true })
  async getUserMovieStatus(@Arg("uid") uid: string, @Arg("mid") mid: string) {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) throw new Error("User not found");
    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) throw new Error("Movie not found");
    const movieStats = await MovieStats.findOne({
      where: { userId: uid, movieId: mid },
    });
    if (!movieStats) throw new Error("Stats not found");
    return { user, movie, movieStats };
  }

  @Mutation(() => Users, { nullable: true })
  async createUser(@Arg("options") options: UserInput) {
    let existingUser = await Users.findOne({ where: { id: options.id } });
    if (existingUser) return existingUser;
    let user;
    try {
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(Users)
        .values([
          {
            id: options.id,
            name: options.name,
            email: options.email,
            photoUrl: options.photoUrl,
            nickname: options.nickname,
          },
        ])
        .returning("*")
        .execute();
      user = result.raw[0];
    } catch (err) {
      console.log(err);
    }
    return user;
  }

  @Mutation(() => NickNameResponse)
  async updateUserProfilePhoto(
    @Arg("uid") uid: string,
    @Arg("url") url: string
  ): Promise<NickNameResponse> {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) {
      return {
        errors: [
          {
            field: "user",
            message: "User not found",
          },
        ],
      };
    }

    if (url.length < 0) {
      return {
        errors: [
          {
            field: "empty nick name",
            message: "URL should not be empty",
          },
        ],
      };
    }

    if (typeof url !== undefined) {
      await Users.update({ id: uid }, { photoUrl: url });
    }
    return {
      user,
    };
  }

  @Mutation(() => NickNameResponse)
  async updateUserBg(
    @Arg("uid") uid: string,
    @Arg("url") url: string
  ): Promise<NickNameResponse> {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) {
      return {
        errors: [
          {
            field: "user",
            message: "User not found",
          },
        ],
      };
    }

    if (url.length < 0) {
      return {
        errors: [
          {
            field: "empty nick name",
            message: "URL should not be empty",
          },
        ],
      };
    }

    if (typeof url !== undefined) {
      await Users.update({ id: uid }, { bg: url });
    }
    return {
      user,
    };
  }

  @Mutation(() => NickNameResponse)
  async updateUserNickName(
    @Arg("uid") uid: string,
    @Arg("nickname", () => String, { nullable: true }) nickname: string
  ): Promise<NickNameResponse> {
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) {
      return {
        errors: [
          {
            field: "user",
            message: "User not found",
          },
        ],
      };
    }

    if (nickname.length < 3) {
      return {
        errors: [
          {
            field: "empty nick name",
            message: "Username should be at-least 3 characters long",
          },
        ],
      };
    }

    const nickNameExist = await Users.findOne({ where: { nickname } });
    if (nickNameExist) {
      return {
        errors: [
          {
            field: "nickname",
            message: "Username already exists",
          },
        ],
      };
    }

    if (typeof nickname !== undefined) {
      await Users.update({ id: uid }, { nickname });
    }
    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg("uid") uid: string): Promise<boolean> {
    await Users.delete(uid);
    return true;
  }

  @Query(() => Users, { nullable: true })
  async me(@Ctx() { req }: MyContext): Promise<Users | null> {
    // User is not logged in.
    console.log(req.session);
    if (!req.session.userId) return null;
    const user = await Users.findOne({
      where: [{ id: req.session.userId }, { nickname: req.session.userId }],
    });
    return user;
  }

  @Mutation(() => UserResponse, { nullable: true })
  async login(
    @Arg("uid") uid: string,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) return { error: "User does not exist" };
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
