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
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { ReplyStats } from './ReplyStats';
import { User } from './User';

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_reply_id' })
  @Field(() => String)
  rid!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @Column()
  movieMid!: string;

  @Field(() => String)
  @Column()
  parentCommentCid!: string;

  @Field(() => String, { nullable: true })
  @Column()
  parentReplyRid!: string;

  @Field(() => String)
  @Column()
  commentedUserUid!: string;

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

  @ManyToOne(() => Movie, (movie) => movie.replies)
  movie: Movie;

  @ManyToOne(() => Comment, (comment) => comment.replies)
  parentComment!: Comment;

  @ManyToOne(() => User, (user) => user.replies)
  commentedUser!: User;

  @ManyToOne(() => Platform, (platform) => platform.replies)
  platform: Platform;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String)
  @DeleteDateColumn()
  deletedAt?: Date;
}
