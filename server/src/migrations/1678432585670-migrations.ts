import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678432585670 implements MigrationInterface {
    name = 'migrations1678432585670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow" ADD "blocked" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow" ADD "reported" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "toxicityScore" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "flagged" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "flagged"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "toxicityScore"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP COLUMN "reported"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP COLUMN "blocked"`);
    }

}
