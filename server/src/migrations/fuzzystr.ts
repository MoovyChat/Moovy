import { MigrationInterface, QueryRunner } from 'typeorm';

export class EnableFuzzyStrMatchExtension implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch"'`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP EXTENSION IF EXISTS "fuzzystrmatch"`);
  }
}
