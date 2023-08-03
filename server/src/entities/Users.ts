import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { AdminUser } from './Admin';
import { Comment } from './Comment';
import { CommentReport } from './CommentReport';
import { CommentStats } from './CommentStat';
import { Follow } from './Follow';
import { FollowNotifications } from './FollowNotifications';
import { LikeNotifications } from './LikeNotifications';
import { Movie } from './Movie';
import { MovieStats } from './MovieStats';
import { Profile } from './Profile';
import { Reply } from './Reply';
import { ReplyReport } from './ReplyReport';
import { ReplyStats } from './ReplyStats';
import { Visited } from './Visited';

@ObjectType()
@Entity()
export class Users extends BaseEntity {
  @PrimaryColumn({ primaryKeyConstraintName: 'pk_users_id' })
  @Field(() => String)
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => String)
  @Column()
  photoUrl: string;

  @Field(() => String, { nullable: true })
  @Column({
    nullable: true,
    default:
      'https://firebasestorage.googleapis.com/v0/b/moovychat.appspot.com/o/moovy-text-logo-white%20(1).jpg?alt=media&token=42f9aaee-8ae3-4996-851c-090da4c10c77',
  })
  bg: string;

  @Field(() => String)
  @Index({ fulltext: true })
  @Column({ unique: true })
  nickname: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  followerCount: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  followingCount: number;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;

  @OneToMany(() => Visited, (visit) => visit.user)
  visited: Visited[];

  @OneToMany(() => Follow, (follow) => follow.following)
  followings: Follow[];

  @OneToMany(() => Follow, (follow) => follow.user)
  followers: Follow[];

  @OneToMany(() => CommentReport, (cr) => cr.users)
  commentReport: CommentReport[];

  @OneToMany(() => ReplyReport, (rr) => rr.users)
  replyReport: ReplyReport[];

  @OneToMany(() => MovieStats, (stats) => stats.user)
  movieStats: MovieStats[];

  @OneToMany(() => CommentStats, (stats) => stats.user)
  commentStats: CommentStats[];

  @OneToMany(() => ReplyStats, (stats) => stats.user)
  replyStats: ReplyStats[];

  @OneToMany(() => Comment, (comment) => comment.commentedUser)
  comments: Comment[];

  @OneToMany(() => Reply, (reply) => reply.commentedUser)
  replies: Reply[];

  @OneToMany(() => FollowNotifications, (Notifications) => Notifications.toUser)
  followNotifications: FollowNotifications[];

  @OneToMany(() => LikeNotifications, (Notifications) => Notifications.toUser)
  likeNotifications: LikeNotifications[];

  @OneToMany(() => AdminUser, (admin) => admin.user)
  admin: AdminUser[];

  @OneToMany(() => Movie, (movie) => movie.viewedUsers)
  movies: Movie[];

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  joinedAt: Date;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
