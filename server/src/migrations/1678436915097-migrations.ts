import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678436915097 implements MigrationInterface {
    name = 'migrations1678436915097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reply_report" DROP COLUMN "commentsId"`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD "replyId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD "report" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment_report" ADD "report" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment_report" DROP COLUMN "report"`);
        await queryRunner.query(`ALTER TABLE "reply_report" DROP COLUMN "report"`);
        await queryRunner.query(`ALTER TABLE "reply_report" DROP COLUMN "replyId"`);
        await queryRunner.query(`ALTER TABLE "reply_report" ADD "commentsId" character varying NOT NULL`);
    }

}
