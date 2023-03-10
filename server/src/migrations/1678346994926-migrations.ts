import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1678346994926 implements MigrationInterface {
    name = 'migrations1678346994926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD "subject" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "subject"`);
    }

}
