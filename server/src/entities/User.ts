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
import { Field, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { CommentStats } from './CommentStat';
import { Movie } from './Movie';
import { MovieStats } from './MovieStats';
import { Reply } from './Reply';
import { ReplyStats } from './ReplyStats';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @PrimaryColumn()
  @Field(() => String)
  uid: string;

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

  @Field(() => [String], { nullable: true })
  @Column({ type: 'text', array: true, default: [] })
  watchedMovies?: string[];

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
