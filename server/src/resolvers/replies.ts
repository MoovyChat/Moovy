import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  Int,
  Subscription,
  ObjectType,
} from 'type-graphql';
import fetch from 'isomorphic-fetch';
import { Reply } from '../entities/Reply';
import { conn } from '../dataSource';
import { ReplyStats } from '../entities/ReplyStats';
import { Users } from '../entities/Users';
import { REPLY_LIKES_SUB } from '../constants';
import { Comment } from '../entities/Comment';
import { IsUserLikedObject } from './comments';
import { PageInfo } from '../pagination';
import { ReplyConnection } from '../connections';

@ObjectType()
class replyLikesObject {
  @Field(() => [Users])
  likes: Users[];
  @Field(() => Int)
  likesCount: number;
  @Field(() => Int)
  page: number;
  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
class RepliesObject {
  @Field(() => [Reply])
  replies: Reply[];
  @Field(() => Int)
  repliesCount: number;
  @Field(() => Boolean)
  hasMore: boolean;
}

@InputType()
class ReplyInput {
  @Field()
  message: string;
  @Field(() => Int)
  likesCount: number;
  @Field(() => Int)
  repliesCount: number;
  @Field()
  movieId: string;
  @Field()
  parentCommentId: string;
  @Field(() => String, { nullable: true })
  parentRepliedUser: string;
  @Field()
  parentReplyId: string;
  @Field()
  commentedUserId: string;
  @Field()
  commentedUserName: string;
  @Field(() => Int)
  platformId: number;
}
@Resolver()
export class ReplyResolver {
  @Query(() => [Reply])
  getAllReplies(): Promise<Reply[]> {
    return Reply.find({});
  }

  @Query(() => Reply, { nullable: true })
  getReply(@Arg('rid') rid: string): Promise<Reply | null> {
    return Reply.findOne({ where: { id: rid } });
  }

  @Query(() => IsUserLikedObject, { nullable: true })
  async getIsUserLikedReply(@Arg('rid') rid: string, @Arg('uid') uid: string) {
    const replyStat = await ReplyStats.findOne({
      where: { replyId: rid, userId: uid },
    });
    return { id: rid, isLiked: replyStat?.like };
  }

  @Query(() => Users, { nullable: true })
  async getRepliedUser(@Arg('rid') rid: string): Promise<Users | null> {
    if (!rid) throw new Error('Reply id is empty');
    const user = await conn
      .getRepository(Users)
      .createQueryBuilder('user')
      .innerJoinAndSelect(
        'user.replies',
        'reply',
        'reply.commentedUserId = user.id'
      )
      .where('reply.id = :rid', { rid })
      .getOne();
    return user;
  }

  LIMIT = 5;
  @Query(() => RepliesObject)
  async getRepliesOfComment(
    @Arg('cid') cid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<RepliesObject> {
    const realLimit = Math.min(this.LIMIT, limit);
    const reaLimitPlusOne = realLimit + 1;
    const query = conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.parentCommentId = :cid', { cid });
    const repliesCount = await query.getCount();
    query
      .orderBy('reply.likesCount', 'ASC')
      .orderBy('reply.repliesCount', 'ASC')
      .orderBy('reply.createdAt', 'ASC')
      .take(realLimit);
    if (cursor) {
      query.andWhere('reply.createdAt > :cursor', {
        cursor: new Date(parseInt(cursor)),
      });
    }
    const replies = await query.getMany();

    return {
      replies,
      repliesCount,
      hasMore: replies.length === reaLimitPlusOne,
    };
  }

  @Query(() => ReplyConnection)
  async getCommentReplies(
    @Arg('cid', () => String) cid: string,
    @Arg('first', () => Int) first: number,
    @Arg('after', () => String, { nullable: true }) after: string
  ): Promise<ReplyConnection> {
    const query = conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.parentCommentId = :cid', { cid });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      const cursorTimestamp = new Date(parseInt(after, 10));
      query.andWhere('reply.createdAt > :cursor', { cursor: cursorTimestamp });
    }

    // Get `first` number of replies, plus 1 to check for next page
    const replies = await query
      .orderBy('reply.createdAt', 'ASC')
      .take(first + 1)
      .getMany();

    const nodes = replies.slice(0, first);
    const hasNextPage = replies.length > first;
    const endCursor =
      replies.length === 0
        ? String(totalCount)
        : String(replies[replies.length - 1].createdAt.getTime());
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.createdAt.getTime()),
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
  async getRepliesOfReply(
    @Arg('rid') rid: string,
    @Arg('first', () => Int) first: number,
    @Arg('after', () => String, { nullable: true }) after: string
  ): Promise<ReplyConnection> {
    const query = conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.parentReplyId = :rid', { rid });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere('reply.id > :cursor', { cursor: after });
    }

    // Get `first` number of replies, plus 1 to check for next page
    const replies = await query
      .orderBy('reply.createdAt', 'ASC')
      .take(first + 1)
      .getMany();

    const nodes = replies.slice(0, first);
    const hasNextPage = replies.length > first;
    const endCursor =
      replies.length === 0
        ? String(totalCount)
        : replies[replies.length - 1].id;
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.id),
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

  @Mutation(() => Reply, { nullable: true })
  async insertReply(@Arg('options') options: ReplyInput) {
    if (!options.commentedUserId) throw new Error('User does not exist');
    let reply;
    try {
      const url = 'https://toxic.moovychat.com/predict';
      let flagged = false;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_text: options.message }),
      });
      const data = await response.json();
      const score = data.toxicity;
      if (score * 100 > 70) {
        flagged = true;
      }
      await conn.transaction(async (transactionalEntityManager) => {
        // execute queries using transactionalEntityManager
        // Insert Reply.
        const result = await transactionalEntityManager
          .createQueryBuilder()
          .insert()
          .into(Reply)
          .values([
            {
              message: options.message,
              likesCount: options.likesCount,
              movieId: options.movieId,
              parentCommentId: options.parentCommentId,
              parentReplyId: options.parentReplyId,
              parentRepliedUser: options.parentRepliedUser
                ? options.parentRepliedUser
                : '',
              commentedUserId: options.commentedUserId!,
              commentedUserName: options.commentedUserName!,
              platformId: options.platformId,
              repliesCount: options.repliesCount,
              toxicityScore: score,
              flagged: flagged,
            },
          ])
          .returning('*')
          .execute();
        // Update "Parent comment" reply count.
        await Comment.update(
          { id: options.parentCommentId },
          { repliesCount: () => '"repliesCount"+1' }
        );
        if (options.parentReplyId !== options.parentCommentId) {
          // Update "parent reply" reply count.
          await Reply.update(
            { id: options.parentReplyId },
            { repliesCount: () => '"repliesCount"+1' }
          );
        }
        reply = result.raw[0];
      });
      // await pubSub.publish(REPLY_LIKES_SUB, options.movieId);
    } catch (err) {
      throw new Error(err);
    }
    return reply;
  }

  @Query(() => replyLikesObject)
  async getReplyLikes(
    @Arg('rid') rid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyId: rid, like: true },
    });
    const users = await conn
      .getRepository(Users)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.replyStats', 'stats', 'stats.userId = user.id')
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyId = :rid', { rid })
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

  @Mutation(() => Reply, { defaultValue: false })
  async deleteReply(@Arg('rid') rid: string): Promise<Reply | null> {
    let deletedReply: any;
    await conn.transaction(async (manager) => {
      const result = await conn
        .getRepository(Reply)
        .createQueryBuilder('reply')
        .where('reply.id = :rid', { rid })
        .softDelete()
        .returning('*')
        .execute();
      deletedReply = result.raw[0];
      console.log(deletedReply);
      if (deletedReply) {
        // Update comment count.
        const commentRepo = manager.getRepository(Comment);
        const replyRepo = manager.getRepository(Reply);
        if (
          deletedReply.parentReplyId + '' ===
          deletedReply.parentCommentId + ''
        ) {
          await commentRepo.decrement(
            { id: deletedReply.parentReplyId },
            'repliesCount',
            1
          );
        } else {
          await replyRepo.decrement(
            { id: deletedReply.parentReplyId },
            'repliesCount',
            1
          );
        }
      }
    });
    return deletedReply;
  }

  @Subscription(() => replyLikesObject, { topics: REPLY_LIKES_SUB })
  async replyLikesUpdate(@Arg('rid') rid: string): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyId: rid, like: true },
    });
    const users = await conn
      .getRepository(Users)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.replyStats', 'stats', 'stats.userId = user.id')
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyId = :rid', { rid })
      .getMany();
    return { likes: users, likesCount, page: 1, lastPage: 1 };
  }
}
