import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678433108211 implements MigrationInterface {
    name = 'migrations1678433108211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reply_report" ("id" SERIAL NOT NULL, "usersId" character varying NOT NULL, "commentsId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "reply_report_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment_report" ("id" SERIAL NOT NULL, "usersId" character varying NOT NULL, "commentId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "comment_report_id" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "comment_report"`);
        await queryRunner.query(`DROP TABLE "reply_report"`);
    }

}
