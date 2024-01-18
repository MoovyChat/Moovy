import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692824163109 implements MigrationInterface {
    name = 'Migrations1692824163109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "isPublic"`);
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "show"`);
        await queryRunner.query(`ALTER TABLE "room" ADD "show" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room" DROP COLUMN "show"`);
        await queryRunner.query(`ALTER TABLE "room" ADD "show" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "room" ADD "isPublic" boolean NOT NULL DEFAULT false`);
    }

}
