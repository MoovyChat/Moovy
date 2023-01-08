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
import { LikeNotifications } from './LikeNotifications';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_comment_id' })
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @Column()
  commentedUserId!: string;

  @Field(() => String)
  @Column()
  commentedUserName!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @Column()
  movieId!: string;

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

  @OneToMany(() => LikeNotifications, (Notifications) => Notifications.comment)
  likeNotifications: LikeNotifications[];

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

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
