import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialValues1686042739399 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO "platform"("name", "url", "createdAt", "updatedAt", "deletedAt")
            VALUES ('netflix', 'https://www.netflix.com/', DEFAULT, DEFAULT, DEFAULT)
            RETURNING "id", "createdAt", "updatedAt", "deletedAt"
        `);

    await queryRunner.query(`
            INSERT INTO "platform"("name", "url", "createdAt", "updatedAt", "deletedAt")
            VALUES ('aha', 'https://www.aha.video/', DEFAULT, DEFAULT, DEFAULT)
            RETURNING "id", "createdAt", "updatedAt", "deletedAt"
        `);

    await queryRunner.query(`
            INSERT INTO "admin_notifications"("message", "createdAt", "updatedAt", "deletedAt")
            VALUES ('Welcome', DEFAULT, DEFAULT, DEFAULT)
            RETURNING *
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DELETE FROM "admin_notifications"
            WHERE "message" = 'Welcome'
        `);

    await queryRunner.query(`
            DELETE FROM "platform"
            WHERE "name" = 'Netflix'
            AND "url" = 'https://www.netflix.com/'
        `);

    await queryRunner.query(`
            DELETE FROM "platform"
            WHERE "name" = 'aha'
            AND "url" = 'https://www.aha.video/'
        `);
  }
}
