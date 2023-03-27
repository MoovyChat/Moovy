import { CommentReport } from '../entities/CommentReport';
import { ReplyReport } from '../entities/ReplyReport';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { conn } from '../dataSource';

@Resolver()
export class ReportResolver {
  @Query(() => Boolean)
  async isReported(
    @Arg('id') id: string,
    @Arg('uid') uid: string,
    @Arg('isComment') isComment: boolean
  ) {
    let found = false;
    if (isComment) {
      const cReport = await CommentReport.findOne({
        where: { usersId: uid, commentId: id, report: true },
      });
      if (cReport) found = true;
    } else {
      const rReport = await ReplyReport.findOne({
        where: { usersId: uid, replyId: id, report: true },
      });
      if (rReport) found = true;
    }
    return found;
  }

  @Mutation(() => CommentReport, { nullable: true })
  async reportComment(
    @Arg('cid') cid: string,
    @Arg('uid') uid: string,
    @Arg('report') report: boolean
  ) {
    await conn.transaction(async (manager) => {
      await manager.getRepository(CommentReport).upsert(
        [
          {
            usersId: uid,
            commentId: cid,
            report: report,
            updatedAt: new Date(),
          },
        ],
        {
          conflictPaths: ['usersId', 'commentId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
    });
    const result = await CommentReport.findOne({
      where: { usersId: uid, commentId: cid },
    });
    return result;
  }

  @Mutation(() => ReplyReport, { nullable: true })
  async reportReply(
    @Arg('rid') rid: string,
    @Arg('uid') uid: string,
    @Arg('report') report: boolean
  ) {
    await conn.transaction(async (manager) => {
      await manager.getRepository(ReplyReport).upsert(
        [
          {
            usersId: uid,
            replyId: rid,
            report: report,
            updatedAt: new Date(),
          },
        ],
        {
          conflictPaths: ['usersId', 'replyId'],
          skipUpdateIfNoValuesChanged: true, // supported by postgres, skips update if it would not change row values
        }
      );
    });
    const result = await ReplyReport.findOne({
      where: { usersId: uid, replyId: rid },
    });
    return result;
  }
}
