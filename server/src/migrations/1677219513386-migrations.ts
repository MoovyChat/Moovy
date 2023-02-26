import { MigrationInterface, QueryRunner } from 'typeorm';

export class migrations1677219513386 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP EXTENSION IF EXISTS "fuzzystrmatch"`);
  }
}
