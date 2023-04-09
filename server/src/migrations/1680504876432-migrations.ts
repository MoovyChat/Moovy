import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1680504876432 implements MigrationInterface {
    name = 'migrations1680504876432'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin_user" ("userId" character varying NOT NULL, "role" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a93ad905a72b85605fb28b26198" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD CONSTRAINT "FK_a93ad905a72b85605fb28b26198" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP CONSTRAINT "FK_a93ad905a72b85605fb28b26198"`);
        await queryRunner.query(`DROP TABLE "admin_user"`);
    }

}
