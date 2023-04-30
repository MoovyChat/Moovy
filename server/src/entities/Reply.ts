import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Float, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { LikeNotifications } from './LikeNotifications';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { ReplyReport } from './ReplyReport';
import { ReplyStats } from './ReplyStats';
import { Users } from './Users';

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @Column()
  movieId!: string;

  @Field(() => String)
  @Column()
  parentCommentId!: string;

  @Field(() => String, { nullable: true })
  @Column()
  commentedUserName!: string;

  @Field(() => String, { nullable: true })
  @Column()
  parentReplyId!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  parentRepliedUser: string;

  @Field(() => String)
  @Column()
  commentedUserId!: string;

  @OneToMany(() => ReplyStats, (stats) => stats.reply)
  replyStats: ReplyStats[];

  @Field(() => Int, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  likesCount: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  repliesCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @Field(() => String, { nullable: true })
  @Column({
    nullable: true,
    default: 'reply',
  })
  type: string;

  @Field(() => Float)
  @Column({ type: 'float', default: 0.0 })
  toxicityScore!: number;

  @Field(() => Boolean)
  @Column({ default: false })
  flagged!: boolean;

  @OneToMany(() => LikeNotifications, (Notifications) => Notifications.reply)
  likeNotifications: LikeNotifications[];

  @ManyToOne(() => Movie, (movie) => movie.replies)
  movie: Movie;

  @OneToMany(() => ReplyReport, (rr) => rr.reply)
  replyReport: ReplyReport[];

  @ManyToOne(() => Comment, (comment) => comment.replies)
  parentComment!: Comment;

  @ManyToOne(() => Users, (user) => user.replies)
  commentedUser!: Users;

  @ManyToOne(() => Platform, (platform) => platform.replies)
  platform: Platform;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
