import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1679527555594 implements MigrationInterface {
    name = 'migrations1679527555594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "follows" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "blocked" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "blocked" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "reported" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "reported" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "reported" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "reported" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "blocked" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "blocked" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "follow" ALTER COLUMN "follows" DROP DEFAULT`);
    }

}
