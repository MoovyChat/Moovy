import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692771048643 implements MigrationInterface {
    name = 'Migrations1692771048643'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."room_roomtype_enum" AS ENUM('public', 'private')`);
        await queryRunner.query(`CREATE TABLE "room" ("id" character varying NOT NULL, "name" character varying NOT NULL, "roomType" "public"."room_roomtype_enum" NOT NULL DEFAULT 'public', "show" character varying NOT NULL, "isPublic" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_c6d46db005d623e691b2fbcba23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "room_admins_users" ("roomId" character varying NOT NULL, "usersId" character varying NOT NULL, CONSTRAINT "PK_78addb939136c10e970caa59528" PRIMARY KEY ("roomId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5549551cbcc9dc5713c26fd781" ON "room_admins_users" ("roomId") `);
        await queryRunner.query(`CREATE INDEX "IDX_381813d1ff8bfdcdd872eef1e6" ON "room_admins_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "currentRoomId" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_0f973f21e154a028088f5e64736" FOREIGN KEY ("currentRoomId") REFERENCES "room"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "room_admins_users" ADD CONSTRAINT "FK_5549551cbcc9dc5713c26fd7814" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "room_admins_users" ADD CONSTRAINT "FK_381813d1ff8bfdcdd872eef1e6a" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "room_admins_users" DROP CONSTRAINT "FK_381813d1ff8bfdcdd872eef1e6a"`);
        await queryRunner.query(`ALTER TABLE "room_admins_users" DROP CONSTRAINT "FK_5549551cbcc9dc5713c26fd7814"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_0f973f21e154a028088f5e64736"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "currentRoomId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_381813d1ff8bfdcdd872eef1e6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5549551cbcc9dc5713c26fd781"`);
        await queryRunner.query(`DROP TABLE "room_admins_users"`);
        await queryRunner.query(`DROP TABLE "room"`);
        await queryRunner.query(`DROP TYPE "public"."room_roomtype_enum"`);
    }

}
