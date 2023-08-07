import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691396775963 implements MigrationInterface {
    name = 'Migrations1691396775963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version" ADD "mandatory" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "version" DROP COLUMN "mandatory"`);
    }

}
