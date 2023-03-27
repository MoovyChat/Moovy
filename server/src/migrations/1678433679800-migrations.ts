import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678433679800 implements MigrationInterface {
    name = 'migrations1678433679800'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reply" ADD "toxicityScore" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "reply" ADD "flagged" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "flagged"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP COLUMN "toxicityScore"`);
    }

}
