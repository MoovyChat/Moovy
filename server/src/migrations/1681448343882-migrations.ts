import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681448343882 implements MigrationInterface {
    name = 'migrations1681448343882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "bio" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "bio" SET DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "bg" SET DEFAULT 'https://firebasestorage.googleapis.com/v0/b/moovychat.appspot.com/o/moovy-text-logo-white%20(1).jpg?alt=media&token=42f9aaee-8ae3-4996-851c-090da4c10c77'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "bg" SET DEFAULT 'https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/moovy-text-logo-white.png?alt=media&token=116dbe60-973c-4302-8402-ce1f3d0aab4a'`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "bio" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "profile" ALTER COLUMN "bio" SET NOT NULL`);
    }

}
