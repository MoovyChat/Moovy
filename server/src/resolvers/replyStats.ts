import { ReplyStats } from '../entities/ReplyStats';
import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { Reply } from '../entities/Reply';
import { conn } from '../dataSource';
import { Users } from '../entities/Users';

@ObjectType()
class ReplyStatsObject {
  @Field(() => ReplyStats)
  likeStatus: ReplyStats;
  @Field(() => Users)
  user: Users;
}
@Resolver()
export class ReplyStatsResolver {
  @Mutation(() => ReplyStatsObject, { nullable: true })
  async setReplyLike(
    @Arg('uid') uid: string,
    @Arg('rid') rid: string,
    @Arg('mid') mid: string,
    @Arg('like') like: boolean
  ): Promise<ReplyStatsObject | null> {
    const reply = await Reply.findOne({ where: { id: rid } });
    const user = await Users.findOne({ where: { id: uid } });
    if (!user) throw new Error('You need to login to interact with reply');
    if (!reply) {
      throw new Error('Comment not found');
    }
    const replyStat = await ReplyStats.findOne({
      where: { userId: uid, replyId: rid },
    });
    let detail;
    // If there is no stats entry for the reply, create a new entry for the reply
    // state table with the like.
    if (!replyStat) {
      // Insert the new entry.
      const details = await conn
        .createQueryBuilder()
        .insert()
        .into(ReplyStats)
        .values({
          userId: uid,
          replyId: rid,
          movieId: mid,
          like,
        })
        .returning('*')
        .execute();
      detail = details.raw[0];
    } else {
      // If the entry is already present, update the entry with the new update.
      const updateStatus = await conn
        .createQueryBuilder()
        .update(ReplyStats)
        .set({ like })
        .where('replyId = :rid', { rid })
        .andWhere('userId=:uid ', { uid })
        .andWhere('movieId=:mid', { mid })
        .returning('*')
        .execute();

      detail = updateStatus.raw[0];
    }
    // Update the likes count in the reply table.
    await conn
      .createQueryBuilder()
      .update(Reply)
      .set({
        likesCount: () => {
          if (like) return '"likesCount"+1';
          else return '"likesCount"-1';
        },
      })
      .where('id = :rid', { rid })
      .execute();
    return { likeStatus: detail, user };
  }
}
