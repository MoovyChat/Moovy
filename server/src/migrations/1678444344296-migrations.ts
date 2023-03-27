import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678444344296 implements MigrationInterface {
    name = 'migrations1678444344296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reply_report" DROP CONSTRAINT "reply_report_id"`);
        await queryRunner.query(`ALTER TABLE "reply_report" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "comment_report" DROP CONSTRAINT "comment_report_id"`);
        await queryRunner.query(`ALTER TABLE "comment_report" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD CONSTRAINT "PK_24428e9fc8b03045e3c20edf9cb" PRIMARY KEY ("usersId", "replyId")`);
        await queryRunner.query(`ALTER TABLE "comment_report" ADD CONSTRAINT "PK_8a049236c4f20fb21b108743743" PRIMARY KEY ("usersId", "commentId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_report" DROP CONSTRAINT "PK_8a049236c4f20fb21b108743743"`);
        await queryRunner.query(`ALTER TABLE "reply_report" DROP CONSTRAINT "PK_24428e9fc8b03045e3c20edf9cb"`);
        await queryRunner.query(`ALTER TABLE "comment_report" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment_report" ADD CONSTRAINT "comment_report_id" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD CONSTRAINT "reply_report_id" PRIMARY KEY ("id")`);
    }

}
