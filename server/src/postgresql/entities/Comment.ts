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

import { CommentStats } from './CommentStat';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_comment_id' })
  @Field(() => String)
  cid!: string;

  @Field(() => String)
  @Column()
  commentedUserUid!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @Column()
  movieMid!: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  likesCount: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ type: 'int', default: 0 })
  repliesCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @OneToMany(() => Reply, (reply) => reply.parentComment)
  replies: Reply[];

  @OneToMany(() => CommentStats, (stats) => stats.comment)
  commentStats: CommentStats[];

  @ManyToOne(() => User, (user) => user.comments)
  commentedUser: User;

  @ManyToOne(() => Movie, (movie) => movie.comments)
  movie: Movie;

  @ManyToOne(() => Platform, (platform) => platform.comments)
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
