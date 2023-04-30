import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1682488375608 implements MigrationInterface {
    name = 'migrations1682488375608'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_d1641945421ad79eec5e2cd548a"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD "commentId" uuid`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP COLUMN "replyId"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD "replyId" uuid`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP COLUMN "replyId"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD "replyId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "pk_reply_id"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "parentCommentId"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "parentCommentId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_5ede2aac173156a8c9388dc919c"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD "commentId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "pk_comment_id"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_d1641945421ad79eec5e2cd548a" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c" FOREIGN KEY ("parentCommentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_5ede2aac173156a8c9388dc919c" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_5ede2aac173156a8c9388dc919c"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_d1641945421ad79eec5e2cd548a"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "pk_comment_id" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD "commentId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_5ede2aac173156a8c9388dc919c" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "parentCommentId"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "parentCommentId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "PK_94fa9017051b40a71e000a2aff9"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "pk_reply_id" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c" FOREIGN KEY ("parentCommentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP COLUMN "replyId"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD "replyId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP COLUMN "replyId"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD "replyId" integer`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD "commentId" integer`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_d1641945421ad79eec5e2cd548a" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
