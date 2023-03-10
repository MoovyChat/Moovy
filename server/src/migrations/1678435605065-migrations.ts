import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678435605065 implements MigrationInterface {
    name = 'migrations1678435605065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "toxicityScore"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "toxicityScore" double precision NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "toxicityScore"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "toxicityScore" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "toxicityScore"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "toxicityScore" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "toxicityScore"`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "toxicityScore" integer NOT NULL DEFAULT '0'`);
    }

}
