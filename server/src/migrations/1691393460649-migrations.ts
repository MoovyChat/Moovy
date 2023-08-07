import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691393460649 implements MigrationInterface {
    name = 'Migrations1691393460649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version" ADD "notes" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version" DROP COLUMN "notes"`);
    }

}
