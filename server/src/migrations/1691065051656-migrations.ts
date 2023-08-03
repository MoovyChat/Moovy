import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1691065051656 implements MigrationInterface {
    name = 'Migrations1691065051656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP COLUMN "role"`);
        await queryRunner.query(`CREATE TYPE "public"."admin_user_role_enum" AS ENUM('ADMIN', 'MODERATOR', 'USER')`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD "role" "public"."admin_user_role_enum" NOT NULL DEFAULT 'USER'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."admin_user_role_enum"`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD "role" character varying NOT NULL`);
    }

}
