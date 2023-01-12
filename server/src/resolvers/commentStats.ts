import { CommentStats } from '../entities/CommentStat';
import {
  Arg,
  Field,
  Mutation,
  ObjectType,
  PubSub,
  PubSubEngine,
  Resolver,
} from 'type-graphql';
import { Comment } from '../entities/Comment';
import { conn } from '../dataSource';
import { COMMENT_LIKES_SUB } from '../constants';
import { User } from '../entities/User';
import { LikeNotifications } from '../entities/LikeNotifications';

@ObjectType()
class CommentsStatsObject {
  @Field(() => CommentStats)
  likeStatus: CommentStats;
  @Field(() => User)
  user: User;
}

@Resolver()
export class CommentStatsResolver {
  @Mutation(() => CommentsStatsObject, { nullable: true })
  async setCommentLike(
    @Arg('uid') uid: string,
    @Arg('cid') cid: string,
    @Arg('mid') mid: string,
    @Arg('like') like: boolean,
    @PubSub() pubSub: PubSubEngine
  ): Promise<CommentsStatsObject | null> {
    const comment = await Comment.findOne({ where: { id: cid } });
    const user = await User.findOne({ where: { id: uid } });
    if (!user) throw new Error('You need to login to interact with comment');
    if (!comment) throw new Error('Comment not found');

    const commentStat = await CommentStats.findOne({
      where: { userId: uid, commentId: cid },
    });
    let detail;
    if (!commentStat) {
      const details = await conn
        .createQueryBuilder()
        .insert()
        .into(CommentStats)
        .values({
          userId: uid,
          commentId: cid,
          movieId: mid,
          like,
        })
        .returning('*')
        .execute();
      detail = details.raw[0];
    } else {
      const updateStatus = await conn
        .createQueryBuilder()
        .update(CommentStats)
        .set({ like })
        .where('commentId = :cid', { cid })
        .andWhere('userId=:uid ', { uid })
        .andWhere('movieId=:mid', { mid })
        .returning('*')
        .execute();
      detail = updateStatus.raw[0];
    }
    // Update the likes count in the comment table.
    if (detail) {
      await conn
        .createQueryBuilder()
        .update(Comment)
        .set({
          likesCount: () => {
            if (like) return '"likesCount"+1';
            else return '"likesCount"-1';
          },
        })
        .where('id = :cid', { cid })
        .returning('*')
        .execute();

      if (like) {
        // Insert notifications.
        const notifications = conn.getRepository(LikeNotifications);
        if (uid !== comment.commentedUserId) {
          const commentedUser = await User.findOne({
            where: { id: comment.commentedUserId },
          });
          const message = `${user?.nickname} liked your comment`;
          await notifications.insert({
            toUserId: commentedUser?.id,
            toUserNickName: commentedUser?.nickname,
            commentId: cid,
            replyId: null,
            isRead: false,
            message: message,
            fromUser: uid,
            fromUserPhotoUrl: user?.photoUrl,
          });
        }
      }
    }

    await pubSub.publish(COMMENT_LIKES_SUB, cid);
    return { likeStatus: detail, user };
  }
}
