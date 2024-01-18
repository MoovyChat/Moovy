import { conn } from "../dataSource";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  PubSub,
  PubSubEngine,
  Subscription,
  Root,
  ObjectType,
  Ctx,
} from "type-graphql";
import fetch from "isomorphic-fetch";
import { Comment } from "../entities/Comment";
import { Users } from "../entities/Users";
import { CommentStats } from "../entities/CommentStat";
import { COMMENT_COUNT_UPDATE, COMMENT_LIKES_SUB } from "../constants";
import { Movie } from "../entities/Movie";
import { Reply } from "../entities/Reply";
import { MyContext } from "../types";

@InputType()
class CommentInput {
  @Field()
  message: string;
  @Field(() => Int)
  likesCount: number;
  @Field()
  movieId: string;
  @Field()
  commentedUserId: string;
  @Field()
  commentedUserName: string;
  @Field(() => Int)
  platformId: number;
}

@ObjectType()
export class IsUserLikedObject {
  @Field()
  id: string;
  @Field(() => Boolean, { defaultValue: false })
  isLiked: boolean;
}

@ObjectType()
class CommentLikesObject {
  @Field(() => [Users])
  likes: Users[];
  @Field(() => Int)
  likesCount: number;
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  page: number;
}

@ObjectType()
class CommentOrReply {
  @Field(() => Comment, { nullable: true })
  comment: Comment | null;
  @Field(() => Reply, { nullable: true })
  reply: Reply | null;
}

@Resolver()
export class CommentResolver {
  @Query(() => [Comment])
  getAllComments(): Promise<Comment[]> {
    return Comment.find();
  }

  @Query(() => Comment)
  async getComment(
    @Arg("cid") cid: string,
    @Ctx() context: MyContext
  ): Promise<Comment | undefined> {
    return context.commentLoader.load(cid);
  }

  @Query(() => CommentOrReply, { nullable: true })
  async getCommentOrReply(
    @Arg("id") id: string,
    @Arg("type") type: string
  ): Promise<CommentOrReply | null> {
    let comment = null;
    let reply = null;
    await conn.transaction(async (manager) => {
      const commentRepo = manager.getRepository(Comment);
      const replyRepo = manager.getRepository(Reply);
      if (type === "comment") {
        comment = await commentRepo.findOne({ where: { id } });
      }
      if (type === "reply") {
        reply = await replyRepo.findOne({ where: { id } });
      }
    });

    return {
      comment,
      reply,
    };
  }

  @Query(() => IsUserLikedObject, { nullable: true })
  async getIsUserLikedComment(
    @Arg("cid") cid: string,
    @Arg("uid") uid: string
  ) {
    const commentStat = await CommentStats.findOne({
      where: { commentId: cid, userId: uid },
    });
    return { id: cid, isLiked: commentStat?.like };
  }

  @Query(() => Users, { nullable: true })
  async getCommentedUser(@Arg("cid") cid: string): Promise<Users | null> {
    if (!cid) throw new Error("Comment id is empty");
    const user = await conn
      .getRepository(Users)
      .createQueryBuilder("user")
      .innerJoinAndSelect(
        "user.comments",
        "comment",
        "comment.commentedUserId = user.id"
      )
      .where("comment.id = :cid", { cid })
      .getOne();
    return user;
  }

  @Query(() => CommentLikesObject)
  async getCommentLikes(
    @Arg("cid") cid: string,
    @Arg("limit", () => Int) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<CommentLikesObject> {
    const likesCount = await CommentStats.count({
      where: { commentId: cid, like: true },
    });
    const users = await conn
      .getRepository(Users)
      .createQueryBuilder("user")
      .innerJoinAndSelect(
        "user.commentStats",
        "stats",
        "stats.userId = user.id"
      )
      .where("stats.like = :like", { like: true })
      .andWhere("stats.commentId = :cid", { cid })
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return {
      likes: users,
      likesCount,
      page,
      lastPage: likesCount === 0 ? 1 : Math.ceil(likesCount / limit),
    };
  }

  TOXIC_API_URL = "https://toxic.moovychat.com/predict";
  COMMENT_COUNT_UPDATE = "COMMENT_COUNT_UPDATE";
  @Mutation(() => Comment, { nullable: true })
  async insertComment(
    @Arg("options") options: CommentInput,
    @PubSub() pubSub: PubSubEngine
  ) {
    // Validate input data
    if (!options.commentedUserId) {
      throw new Error("User does not exist");
    }

    // Predict toxicity score
    const response = await fetch(this.TOXIC_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_text: options.message }),
    });
    const data = await response.json();
    const toxicityScore = data.toxicity;
    const isFlagged = toxicityScore * 100 > 70;

    // Insert comment and update movie comment count
    const comment = await conn.transaction(async (manager) => {
      const commentRepo = manager.getRepository(Comment);
      const movieRepo = manager.getRepository(Movie);

      const comment = await commentRepo.create({
        message: options.message,
        likesCount: options.likesCount,
        movieId: options.movieId,
        commentedUserId: options.commentedUserId,
        platformId: options.platformId,
        commentedUserName: options.commentedUserName,
        toxicityScore,
        flagged: isFlagged,
      });

      await commentRepo.save(comment);
      await movieRepo.increment({ id: options.movieId }, "commentCount", 1);
      await pubSub.publish(COMMENT_COUNT_UPDATE, options.movieId);

      return comment;
    });
    return comment;
  }

  @Mutation(() => Comment, { nullable: true })
  async deleteComment(
    @Arg("cid") cid: string,
    @Arg("mid") mid: string
  ): Promise<Comment | null> {
    let deletedComment: any;
    await conn.transaction(async (manager) => {
      const result = await conn
        .getRepository(Comment)
        .createQueryBuilder("comment")
        .where("comment.id = :cid", { cid })
        .softDelete()
        .returning("*")
        .execute();
      deletedComment = result.raw[0];
      if (deletedComment) {
        // Update comment count.
        const movieRepo = manager.getRepository(Movie);
        await movieRepo.decrement({ id: mid }, "commentCount", 1);
      }
    });
    return deletedComment;
  }

  // Whenever user comments, this subscriber gets called.
  @Subscription(() => Int, { topics: COMMENT_COUNT_UPDATE })
  async movieCommentsUpdate(@Root() mid: string): Promise<number> {
    const commentsCount = await Comment.count({
      where: { movieId: mid },
    });
    return commentsCount;
  }

  @Subscription(() => CommentLikesObject, { topics: COMMENT_LIKES_SUB })
  async commentLikesUpdate(
    @Arg("cid") cid: string
  ): Promise<CommentLikesObject> {
    const likesCount = await CommentStats.count({
      where: { commentId: cid, like: true },
    });
    const users = await conn
      .getRepository(Users)
      .createQueryBuilder("user")
      .innerJoinAndSelect(
        "user.commentStats",
        "stats",
        "stats.userId = user.id"
      )
      .where("stats.like = :like", { like: true })
      .andWhere("stats.commentId = :cid", { cid })
      .getMany();
    return { likes: users, likesCount, page: 1, lastPage: 1 };
  }
}
