import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1677237626435 implements MigrationInterface {
    name = 'migrations1677237626435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_e9f68503556c5d72a161ce38513"`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" DROP CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_e7e1f827babd878745dcce0e846"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_80089d7ae1a3871258332279788"`);
        await queryRunner.query(`ALTER TABLE "visited" DROP CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291"`);
        await queryRunner.query(`ALTER TABLE "movie_stats" DROP CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_e59de70a7a2fb82707555a69540"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd"`);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "photoUrl" character varying NOT NULL, "bg" character varying DEFAULT 'https://firebasestorage.googleapis.com/v0/b/netflix-comments-357200.appspot.com/o/moovy-text-logo-white.png?alt=media&token=116dbe60-973c-4302-8402-ce1f3d0aab4a', "nickname" character varying NOT NULL, "followerCount" integer NOT NULL DEFAULT '0', "followingCount" integer NOT NULL DEFAULT '0', "watchedMovies" text array NOT NULL DEFAULT '{}', "joinedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023" UNIQUE ("nickname"), CONSTRAINT "pk_users_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ad02a1be8707004cb805a4b502" ON "users" ("nickname") `);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_e9f68503556c5d72a161ce38513" FOREIGN KEY ("followingId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" ADD CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_e7e1f827babd878745dcce0e846" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e" FOREIGN KEY ("commentedUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_80089d7ae1a3871258332279788" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visited" ADD CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_stats" ADD CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965" FOREIGN KEY ("viewedUsersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_e59de70a7a2fb82707555a69540" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd" FOREIGN KEY ("commentedUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_e59de70a7a2fb82707555a69540"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965"`);
        await queryRunner.query(`ALTER TABLE "movie_stats" DROP CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7"`);
        await queryRunner.query(`ALTER TABLE "visited" DROP CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_80089d7ae1a3871258332279788"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_e7e1f827babd878745dcce0e846"`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" DROP CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_e9f68503556c5d72a161ce38513"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad02a1be8707004cb805a4b502"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd" FOREIGN KEY ("commentedUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_e59de70a7a2fb82707555a69540" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965" FOREIGN KEY ("viewedUsersId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_stats" ADD CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visited" ADD CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_80089d7ae1a3871258332279788" FOREIGN KEY ("toUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e" FOREIGN KEY ("commentedUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_e7e1f827babd878745dcce0e846" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" ADD CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c" FOREIGN KEY ("toUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_e9f68503556c5d72a161ce38513" FOREIGN KEY ("followingId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
