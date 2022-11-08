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

import { Reply } from '../entities/Reply';
import { conn } from '../dataSource';
import { ReplyStats } from '../entities/ReplyStats';
import { User } from '../entities/User';
import { REPLY_LIKES_SUB } from '../../constants';
import { Comment } from '../entities/Comment';

@ObjectType()
class replyLikesObject {
  @Field(() => [User])
  likes: User[];
  @Field(() => Int)
  likesCount: number;
}

@ObjectType()
class RepliesObject {
  @Field(() => [Reply])
  replies: Reply[];
  @Field(() => Int)
  repliesCount: number;
  @Field(() => Int)
  lastPage: number;
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
  @Field()
  parentReplyId: string;
  @Field()
  commentedUserId: string;
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

  @Query(() => Boolean, { nullable: true })
  async getIsUserLikedReply(@Arg('rid') rid: string, @Arg('uid') uid: string) {
    const replyStat = await ReplyStats.findOne({
      where: { replyId: rid, userId: uid },
    });
    return replyStat?.like;
  }

  @Query(() => User, { nullable: true })
  async getRepliedUser(@Arg('rid') rid: string): Promise<User | null> {
    if (!rid) throw new Error('Reply id is empty');
    const user = await conn
      .getRepository(User)
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

  @Query(() => RepliesObject)
  async getRepliesOfComment(
    @Arg('cid') cid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<RepliesObject> {
    const repliesCount = await Reply.count({
      where: { parentCommentId: cid },
    });
    const replies = await conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.parentCommentId = :cid', { cid })
      .orderBy('reply.likesCount', 'ASC')
      .orderBy('reply.repliesCount', 'ASC')
      .orderBy('reply.createdAt', 'ASC')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();

    return {
      replies,
      repliesCount,
      lastPage: Math.ceil(repliesCount / limit),
    };
  }

  @Query(() => RepliesObject)
  async getRepliesOfReply(
    @Arg('rid') rid: string,
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<RepliesObject> {
    const repliesCount = await Reply.count({
      where: { parentReplyId: rid },
    });
    const replies = await conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.parentReplyId = :rid', { rid })
      .andWhere('cast(reply.parentReplyId AS INT) != reply.parentCommentId')
      .orderBy('reply.likesCount', 'ASC')
      .orderBy('reply.repliesCount', 'ASC')
      .orderBy('reply.createdAt', 'ASC')
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();

    return {
      replies,
      repliesCount,
      lastPage: Math.ceil(repliesCount / limit),
    };
  }

  @Mutation(() => Reply, { nullable: true })
  async insertReply(@Arg('options') options: ReplyInput) {
    if (!options.commentedUserId) throw new Error('User does not exist');
    let reply;
    try {
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
              commentedUserId: options.commentedUserId!,
              platformId: options.platformId,
              repliesCount: options.repliesCount,
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

  @Query(() => replyLikesObject, { defaultValue: 0 })
  async getReplyLikes(@Arg('rid') rid: string): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyId: rid, like: true },
    });
    const users = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.replyStats', 'stats', 'stats.userId = user.id')
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyId = :rid', { rid })
      .getMany();
    return { likes: users, likesCount };
  }

  @Mutation(() => Boolean, { defaultValue: false })
  async deleteReply(@Arg('rid') rid: string): Promise<boolean | null> {
    let deletedReply = await conn
      .getRepository(Reply)
      .createQueryBuilder('reply')
      .where('reply.id = :rid', { rid })
      .softDelete()
      .execute();
    console.log(deletedReply);
    return true;
  }

  @Subscription(() => replyLikesObject, { topics: REPLY_LIKES_SUB })
  async replyLikesUpdate(@Arg('rid') rid: string): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyId: rid, like: true },
    });
    const users = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.replyStats', 'stats', 'stats.userId = user.id')
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyId = :rid', { rid })
      .getMany();
    return { likes: users, likesCount };
  }
}
