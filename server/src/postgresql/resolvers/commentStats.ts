import { CommentStats } from '../entities/CommentStat';
import { Arg, Mutation, PubSub, PubSubEngine, Resolver } from 'type-graphql';
import { Comment } from '../entities/Comment';
import { conn } from '../dataSource';
import { COMMENT_LIKES_SUB } from '../../constants';

@Resolver()
export class CommentStatsResolver {
  @Mutation(() => CommentStats, { nullable: true })
  async getCommentStats(
    @Arg('uid') uid: string,
    @Arg('cid') cid: string,
    @Arg('mid') mid: string,
    @Arg('like') like: boolean,
    @PubSub() pubSub: PubSubEngine
  ): Promise<CommentStats | null> {
    const comment = await Comment.findOne({ where: { cid } });
    if (!comment) {
      throw new Error('Comment not found');
    }
    const commentStat = await CommentStats.findOne({
      where: { userUid: uid, commentCid: cid },
    });
    let detail;
    if (!commentStat) {
      const details = await conn
        .createQueryBuilder()
        .insert()
        .into(CommentStats)
        .values({
          userUid: uid,
          commentCid: cid,
          movieMid: mid,
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
        .where('commentCid = :cid', { cid })
        .andWhere('userUid=:uid ', { uid })
        .andWhere('movieMid=:mid', { mid })
        .returning('*')
        .execute();
      detail = updateStatus.raw[0];
    }
    // Update the likes count in the comment table.
    await conn
      .createQueryBuilder()
      .update(Comment)
      .set({
        likesCount: () => {
          if (like) return '"likesCount"+1';
          else return '"likesCount"-1';
        },
      })
      .where('cid = :cid', { cid })
      .returning('*')
      .execute();
    await pubSub.publish(COMMENT_LIKES_SUB, cid);
    return detail;
  }
}
