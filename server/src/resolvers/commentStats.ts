import { CommentStats } from '../entities/CommentStat';
import { Arg, Mutation, PubSub, PubSubEngine, Resolver } from 'type-graphql';
import { Comment } from '../entities/Comment';
import { conn } from '../dataSource';

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
    await pubSub.publish('COMMENT_LIKES_SUB', cid);
    return detail;
  }
}
