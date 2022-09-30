import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  Int,
  PubSubEngine,
  PubSub,
  Subscription,
  ObjectType,
} from 'type-graphql';

import { Reply } from '../entities/Reply';
import { conn } from '../dataSource';
import { ReplyStats } from '../entities/ReplyStats';
import { User } from '../entities/User';
import { REPLY_LIKES_SUB } from '../constants';

@ObjectType()
class replyLikesObject {
  @Field(() => [User])
  likes: User[];
  @Field(() => Int)
  likesCount: number;
}

@InputType()
class ReplyInput {
  @Field()
  message: string;
  @Field(() => [String])
  likes: string[];
  @Field(() => Int)
  likesCount: number;
  @Field()
  movieId: string;
  @Field()
  commentId: string;
  @Field()
  parentReplyRid: string;
  @Field()
  repliedUserUid: string;
  @Field(() => Int)
  platformId: number;
}

@ObjectType()
class RepliesObject {
  @Field(() => [Reply])
  replies: Reply[];
  @Field()
  repliesCount: number;
}

@Resolver()
export class ReplyResolver {
  @Query(() => [Reply])
  getAllReplies(): Promise<Reply[]> {
    return Reply.find({});
  }

  @Query(() => Reply, { nullable: true })
  getReply(@Arg('rid') rid: string): Promise<Reply | null> {
    return Reply.findOne({ where: { rid } });
  }

  @Query(() => Boolean, { nullable: true })
  async getIsUserLikedReply(@Arg('rid') rid: string, @Arg('uid') uid: string) {
    const replyStat = await ReplyStats.findOne({
      where: { replyRid: rid, userUid: uid },
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
        'reply.commentedUserUid = user.uid'
      )
      .where('reply.rid = :rid', { rid })
      .getOne();
    return user;
  }

  @Query(() => RepliesObject)
  async getRepliesOfComment(@Arg('cid') cid: string): Promise<RepliesObject> {
    const [replies, repliesCount] = await Reply.findAndCount({
      where: { parentCommentCid: cid },
      order: { createdAt: 'asc' },
    });
    return { replies, repliesCount };
  }

  @Mutation(() => Reply, { nullable: true })
  async insertReply(@Arg('options') options: ReplyInput) {
    if (!options.repliedUserUid) throw new Error('User does not exist');
    let reply;
    try {
      // Insert comment.
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(Reply)
        .values([
          {
            message: options.message,
            likes: options.likes,
            movieMid: options.movieId,
            parentCommentCid: options.commentId,
            parentReplyRid: options.parentReplyRid,
            commentedUserUid: options.repliedUserUid!,
            platformId: options.platformId,
            replies: [],
          },
        ])
        .returning('*')
        .execute();
      // await pubSub.publish(REPLY_LIKES_SUB, options.movieId);
      reply = result.raw[0];
    } catch (err) {
      throw new Error(err);
    }
    return reply;
  }

  @Query(() => replyLikesObject, { defaultValue: 0 })
  async getReplyLikes(@Arg('rid') rid: string): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyRid: rid, like: true },
    });
    const users = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect(
        'user.replyStats',
        'stats',
        'stats.userUid = user.uid'
      )
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyRid = :rid', { rid })
      .getMany();
    return { likes: users, likesCount };
  }

  @Subscription(() => replyLikesObject, { topics: REPLY_LIKES_SUB })
  async replyLikesUpdate(@Arg('rid') rid: string): Promise<replyLikesObject> {
    const likesCount = await ReplyStats.count({
      where: { replyRid: rid, like: true },
    });
    const users = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect(
        'user.replyStats',
        'stats',
        'stats.userUid = user.uid'
      )
      .where('stats.like = :like', { like: true })
      .andWhere('stats.replyRid = :rid', { rid })
      .getMany();
    return { likes: users, likesCount };
  }
}
