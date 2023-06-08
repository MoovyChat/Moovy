import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686041765216 implements MigrationInterface {
    name = 'Migrations1686041765216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin_notifications" ("id" SERIAL NOT NULL, "message" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_1fecd1cab747b7ab6e850091901" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment_report" ("usersId" character varying NOT NULL, "commentId" character varying NOT NULL, "report" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_8a049236c4f20fb21b108743743" PRIMARY KEY ("usersId", "commentId"))`);
        await queryRunner.query(`CREATE TABLE "movie_stats" ("like" boolean NOT NULL DEFAULT false, "favorite" boolean NOT NULL DEFAULT false, "movieId" character varying NOT NULL, "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0d408efc2e0578d81562fbe91c4" PRIMARY KEY ("movieId", "userId"))`);
        await queryRunner.query(`CREATE TABLE "like_notifications" ("id" SERIAL NOT NULL, "toUserId" character varying NOT NULL, "toUserNickName" character varying NOT NULL, "commentId" uuid, "replyId" uuid, "fromUser" character varying NOT NULL, "message" character varying NOT NULL, "fromUserPhotoUrl" character varying NOT NULL, "isRead" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_bef7dadf65e521b704ac49abfeb" PRIMARY KEY ("id", "toUserId", "fromUser"))`);
        await queryRunner.query(`CREATE TABLE "reply_report" ("usersId" character varying NOT NULL, "replyId" character varying NOT NULL, "report" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_24428e9fc8b03045e3c20edf9cb" PRIMARY KEY ("usersId", "replyId"))`);
        await queryRunner.query(`CREATE TABLE "reply_stats" ("id" SERIAL NOT NULL, "like" boolean NOT NULL DEFAULT false, "replyId" uuid NOT NULL, "movieId" character varying NOT NULL, "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "pk_reply_stats_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reply" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "message" character varying NOT NULL, "movieId" character varying NOT NULL, "parentCommentId" uuid NOT NULL, "commentedUserName" character varying NOT NULL, "parentReplyId" character varying NOT NULL, "parentRepliedUser" character varying, "commentedUserId" character varying NOT NULL, "likesCount" integer NOT NULL DEFAULT '0', "repliesCount" integer NOT NULL DEFAULT '0', "platformId" integer NOT NULL DEFAULT '0', "type" character varying DEFAULT 'reply', "toxicityScore" double precision NOT NULL DEFAULT '0', "flagged" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "platform" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "url" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "pk_platform_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "title" ("id" character varying NOT NULL, "artwork" character varying NOT NULL, "boxart" character varying NOT NULL, "storyart" character varying NOT NULL, "synopsis" character varying, "title" character varying, "type" character varying, "runtime" integer, "year" integer NOT NULL, "rating" character varying, "advisories" text array NOT NULL DEFAULT '{}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_30e6ea2dcc2aae4a4d1f5d9e183" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0b03a7b1fcf179a8854b297385" ON "title" ("synopsis") `);
        await queryRunner.query(`CREATE INDEX "IDX_cb65b3a8b17aa5e02134690952" ON "title" ("title") `);
        await queryRunner.query(`CREATE TABLE "visited" ("userId" character varying NOT NULL, "movieId" character varying NOT NULL, "visitCount" integer NOT NULL, "history" text array NOT NULL DEFAULT '{}', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_09ccd16b1876598d7e37180c4e1" PRIMARY KEY ("userId", "movieId"))`);
        await queryRunner.query(`CREATE TABLE "movie" ("id" character varying NOT NULL, "name" character varying NOT NULL, "synopsis" character varying NOT NULL, "stills" character varying NOT NULL, "thumbs" character varying NOT NULL, "season" character varying NOT NULL, "year" integer NOT NULL, "runtime" integer NOT NULL, "likesCount" integer NOT NULL DEFAULT '0', "commentCount" integer NOT NULL DEFAULT '0', "viewsCount" integer NOT NULL DEFAULT '0', "favCount" integer NOT NULL DEFAULT '0', "platformId" integer NOT NULL DEFAULT '0', "titleId" character varying NOT NULL, "parentTitleName" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "viewedUsersId" character varying, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_cee7125f3cbad047d34a6e1353" ON "movie" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_b9f9a79e15682df7a1ebb00bbb" ON "movie" ("synopsis") `);
        await queryRunner.query(`CREATE INDEX "IDX_b1f33ccdd3decc8c4fee1c18e1" ON "movie" ("parentTitleName") `);
        await queryRunner.query(`CREATE TABLE "comment_stats" ("id" SERIAL NOT NULL, "like" boolean NOT NULL DEFAULT false, "commentId" uuid NOT NULL, "movieId" character varying NOT NULL, "userId" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "pk_comment_stats_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "commentedUserId" character varying NOT NULL, "commentedUserName" character varying NOT NULL, "message" character varying NOT NULL, "movieId" character varying NOT NULL, "likesCount" integer NOT NULL DEFAULT '0', "repliesCount" integer NOT NULL DEFAULT '0', "platformId" integer NOT NULL DEFAULT '0', "toxicityScore" double precision NOT NULL DEFAULT '0', "flagged" boolean NOT NULL DEFAULT false, "type" character varying DEFAULT 'comment', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follow" ("userId" character varying NOT NULL, "followingId" character varying NOT NULL, "follows" boolean NOT NULL DEFAULT false, "blocked" boolean DEFAULT false, "reported" boolean DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb7f37934cfb1fc8375d4a5cd44" PRIMARY KEY ("userId", "followingId"))`);
        await queryRunner.query(`CREATE TABLE "follow_notifications" ("id" SERIAL NOT NULL, "toUserId" character varying NOT NULL, "message" character varying NOT NULL, "fromUser" character varying NOT NULL, "fromUserPhotoUrl" character varying NOT NULL, "isRead" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_6bbe112064f075acb7750723cd7" PRIMARY KEY ("id", "toUserId", "fromUser"))`);
        await queryRunner.query(`CREATE TABLE "profile" ("userId" character varying NOT NULL, "fullname" character varying DEFAULT '', "dob" character varying NOT NULL, "bio" character varying DEFAULT '', "gender" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a24972ebd73b106250713dcddd9" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc9ba9a13c581ac612d974f2d0" ON "profile" ("fullname") `);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "photoUrl" character varying NOT NULL, "bg" character varying DEFAULT 'https://firebasestorage.googleapis.com/v0/b/moovychat.appspot.com/o/moovy-text-logo-white%20(1).jpg?alt=media&token=42f9aaee-8ae3-4996-851c-090da4c10c77', "nickname" character varying NOT NULL, "followerCount" integer NOT NULL DEFAULT '0', "followingCount" integer NOT NULL DEFAULT '0', "watchedMovies" text array NOT NULL DEFAULT '{}', "joinedAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_ad02a1be8707004cb805a4b5023" UNIQUE ("nickname"), CONSTRAINT "pk_users_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ad02a1be8707004cb805a4b502" ON "users" ("nickname") `);
        await queryRunner.query(`CREATE TABLE "admin_user" ("userId" character varying NOT NULL, "role" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a93ad905a72b85605fb28b26198" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "subject" character varying NOT NULL, "message" character varying NOT NULL, "read" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "contact_platform_id" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "movie_stats" ADD CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_stats" ADD CONSTRAINT "FK_aac7ec3fee49f2082cb34665107" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_d1641945421ad79eec5e2cd548a" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like_notifications" ADD CONSTRAINT "FK_80089d7ae1a3871258332279788" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba" FOREIGN KEY ("replyId") REFERENCES "reply"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_e7e1f827babd878745dcce0e846" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply_stats" ADD CONSTRAINT "FK_836221b5da02fb7b637366a0d55" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_a6ffe5b36ef1e425ee1ad1612e5" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c" FOREIGN KEY ("parentCommentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e" FOREIGN KEY ("commentedUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_f60f4bfc75d7653f7a126b4f5d5" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visited" ADD CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "visited" ADD CONSTRAINT "FK_8b8754c217954379e7df5364c8f" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_a4eb80e20da8ea14fff17584385" FOREIGN KEY ("titleId") REFERENCES "title"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965" FOREIGN KEY ("viewedUsersId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_5ede2aac173156a8c9388dc919c" FOREIGN KEY ("commentId") REFERENCES "comment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_e59de70a7a2fb82707555a69540" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment_stats" ADD CONSTRAINT "FK_4e93f8f70c10dd27a09d6468d42" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd" FOREIGN KEY ("commentedUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_aea4918c888422550a85e257894" FOREIGN KEY ("movieId") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_4e727bb6ebf13b2aec74221c4f3" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow" ADD CONSTRAINT "FK_e9f68503556c5d72a161ce38513" FOREIGN KEY ("followingId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" ADD CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c" FOREIGN KEY ("toUserId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD CONSTRAINT "FK_a93ad905a72b85605fb28b26198" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP CONSTRAINT "FK_a93ad905a72b85605fb28b26198"`);
        await queryRunner.query(`ALTER TABLE "follow_notifications" DROP CONSTRAINT "FK_6e7edfa3da0644b2b0670780a7c"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_e9f68503556c5d72a161ce38513"`);
        await queryRunner.query(`ALTER TABLE "follow" DROP CONSTRAINT "FK_af9f90ce5e8f66f845ebbcc6f15"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_4e727bb6ebf13b2aec74221c4f3"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_aea4918c888422550a85e257894"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_16e357ade1c1da4f8fe4b5c7abd"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_4e93f8f70c10dd27a09d6468d42"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_e59de70a7a2fb82707555a69540"`);
        await queryRunner.query(`ALTER TABLE "comment_stats" DROP CONSTRAINT "FK_5ede2aac173156a8c9388dc919c"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_f0d4c2beec59f30ed60b5d4bcbc"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_27fc7ab6aa49d51f0ed74e77965"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_a4eb80e20da8ea14fff17584385"`);
        await queryRunner.query(`ALTER TABLE "visited" DROP CONSTRAINT "FK_8b8754c217954379e7df5364c8f"`);
        await queryRunner.query(`ALTER TABLE "visited" DROP CONSTRAINT "FK_0bb95e476bfca735aaf8db7a291"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_f60f4bfc75d7653f7a126b4f5d5"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_1b2b9ce7004d68d5d45bbdf932e"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_a08f5a3c6c3b13311717a2be57c"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_a6ffe5b36ef1e425ee1ad1612e5"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_836221b5da02fb7b637366a0d55"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_e7e1f827babd878745dcce0e846"`);
        await queryRunner.query(`ALTER TABLE "reply_stats" DROP CONSTRAINT "FK_62c6952fbc2d7dbd875769a55ba"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_80089d7ae1a3871258332279788"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_d1641945421ad79eec5e2cd548a"`);
        await queryRunner.query(`ALTER TABLE "like_notifications" DROP CONSTRAINT "FK_2ed892017a4c02c69e4aa0d331d"`);
        await queryRunner.query(`ALTER TABLE "movie_stats" DROP CONSTRAINT "FK_aac7ec3fee49f2082cb34665107"`);
        await queryRunner.query(`ALTER TABLE "movie_stats" DROP CONSTRAINT "FK_b7e1494d5199c7f3fa01e0ec1e7"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "admin_user"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ad02a1be8707004cb805a4b502"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_bc9ba9a13c581ac612d974f2d0"`);
        await queryRunner.query(`DROP TABLE "profile"`);
        await queryRunner.query(`DROP TABLE "follow_notifications"`);
        await queryRunner.query(`DROP TABLE "follow"`);
        await queryRunner.query(`DROP TABLE "comment"`);
        await queryRunner.query(`DROP TABLE "comment_stats"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b1f33ccdd3decc8c4fee1c18e1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b9f9a79e15682df7a1ebb00bbb"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cee7125f3cbad047d34a6e1353"`);
        await queryRunner.query(`DROP TABLE "movie"`);
        await queryRunner.query(`DROP TABLE "visited"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_cb65b3a8b17aa5e02134690952"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0b03a7b1fcf179a8854b297385"`);
        await queryRunner.query(`DROP TABLE "title"`);
        await queryRunner.query(`DROP TABLE "platform"`);
        await queryRunner.query(`DROP TABLE "reply"`);
        await queryRunner.query(`DROP TABLE "reply_stats"`);
        await queryRunner.query(`DROP TABLE "reply_report"`);
        await queryRunner.query(`DROP TABLE "like_notifications"`);
        await queryRunner.query(`DROP TABLE "movie_stats"`);
        await queryRunner.query(`DROP TABLE "comment_report"`);
        await queryRunner.query(`DROP TABLE "admin_notifications"`);
    }

}
