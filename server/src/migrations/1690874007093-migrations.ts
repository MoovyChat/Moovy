import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1690874007093 implements MigrationInterface {
  name = "Migrations1690874007093";

  public async up(queryRunner: QueryRunner): Promise<void> {
    let tableExists = await queryRunner.hasTable("version");
    if (!tableExists) {
      await queryRunner.query(
        `CREATE TABLE "version" ("version" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_efaf48ac3246f46e661a338640a" PRIMARY KEY ("version"))`
      );
    }
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "watchedMovies"`);
    await queryRunner.query(
      `ALTER TABLE "movie" DROP CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc"`
    );
    await queryRunner.query(
      `ALTER TABLE "movie" ALTER COLUMN "platformId" SET DEFAULT '1'`
    );
    await queryRunner.query(
      `ALTER TABLE "movie" ADD CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "movie" DROP CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc"`
    );
    await queryRunner.query(
      `ALTER TABLE "movie" ALTER COLUMN "platformId" SET DEFAULT '0'`
    );
    await queryRunner.query(
      `ALTER TABLE "movie" ADD CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ADD "watchedMovies" text array NOT NULL DEFAULT '{}'`
    );
    await queryRunner.query(`DROP TABLE "version"`);
  }
}
