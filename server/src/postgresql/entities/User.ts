import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { CommentStats } from './CommentStat';
import { Follow } from './Follow';
import { Movie } from './Movie';
import { MovieStats } from './MovieStats';
import { Reply } from './Reply';
import { ReplyStats } from './ReplyStats';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ primaryKeyConstraintName: 'pk_user_id' })
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

  @Field(() => String)
  @Column({ unique: true })
  nickname: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  followerCount: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ default: 0 })
  followingCount: number;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'text', array: true, default: [] })
  watchedMovies?: string[];

  @OneToMany(() => Follow, (follow) => follow.follower)
  followers: Follow[];

  @OneToMany(() => Follow, (follow) => follow.user)
  followings: Follow[];

  @OneToMany(() => MovieStats, (stats) => stats.user)
  movieStats: MovieStats[];

  @OneToMany(() => CommentStats, (stats) => stats.user)
  commentStats: CommentStats[];

  @OneToMany(() => ReplyStats, (stats) => stats.user)
  replyStats: ReplyStats[];

  @OneToMany(() => Comment, (comment) => comment.commentedUser)
  comments: Comment[];

  @OneToMany(() => Movie, (movie) => movie.viewedUsers)
  movies: Movie[];

  @OneToMany(() => Reply, (reply) => reply.commentedUser)
  replies: Reply[];

  @Field(() => String)
  @CreateDateColumn()
  joinedAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String)
  @DeleteDateColumn()
  deletedAt?: Date;
}
