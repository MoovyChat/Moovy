import { ReplyStats } from '../entities/ReplyStats';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { Reply } from '../entities/Reply';
import { conn } from '../dataSource';

@Resolver()
export class ReplyStatsResolver {
  @Mutation(() => ReplyStats, { nullable: true })
  async getReplyStats(
    @Arg('uid') uid: string,
    @Arg('rid') rid: string,
    @Arg('like') like: boolean
  ): Promise<ReplyStats | null> {
    const reply = await Reply.findOne({ where: { rid } });
    if (!reply) {
      throw new Error('Comment not found');
    }
    const replyStat = await ReplyStats.findOne({
      where: { userUid: uid, replyRid: rid },
    });
    let detail;
    if (!replyStat) {
      const details = await conn
        .createQueryBuilder()
        .insert()
        .into(ReplyStats)
        .values({
          userUid: uid,
          replyRid: rid,
          like,
        })
        .returning('*')
        .execute();
      detail = details.raw[0];
    } else {
      const updateStatus = await conn
        .createQueryBuilder()
        .update(ReplyStats)
        .set({ like })
        .where('replyRid = :rid', { rid })
        .andWhere('userUid=:uid ', { uid })
        .returning('*')
        .execute();
      detail = updateStatus.raw[0];
    }
    return detail;
  }
}
