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

import { CommentReport } from './CommentReport';
import { CommentStats } from './CommentStat';
import { LikeNotifications } from './LikeNotifications';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { Reply } from './Reply';
import { Users } from './Users';

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

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

  @Field(() => Float, { nullable: true })
  @Column({ type: 'float', default: 0.0 })
  toxicityScore!: number;

  @Field(() => Boolean, { nullable: true })
  @Column({ default: false })
  flagged!: boolean;

  @Field(() => String, { nullable: true })
  @Column({
    nullable: true,
    default: 'comment',
  })
  type: string;

  @OneToMany(() => Reply, (reply) => reply.parentComment)
  replies: Reply[];

  @OneToMany(() => LikeNotifications, (Notifications) => Notifications.comment)
  likeNotifications: LikeNotifications[];

  @OneToMany(() => CommentStats, (stats) => stats.comment)
  commentStats: CommentStats[];

  @OneToMany(() => CommentReport, (cr) => cr.comment)
  commentReport: CommentReport[];

  @ManyToOne(() => Users, (user) => user.comments)
  commentedUser: Users;

  @ManyToOne(() => Movie, (movie) => movie.comments)
  movie: Movie;

  @ManyToOne(() => Platform, (platform) => platform.comments)
  platform: Platform;

  @Field(() => String, { nullable: true })
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String, { nullable: true })
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
