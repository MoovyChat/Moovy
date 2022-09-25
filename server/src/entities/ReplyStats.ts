import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Movie } from './Movie';
import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
export class ReplyStats extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => String)
  @Column()
  replyRid!: string;

  @Field(() => String)
  @Column()
  commentCid!: string;

  @Field(() => String)
  @Column()
  movieMid!: string;

  @Field(() => String)
  @Column()
  userUid!: string;

  @ManyToOne(() => Reply, (reply) => reply.replyStats)
  reply: Reply;

  @ManyToOne(() => Comment, (comment) => comment.commentStats)
  comment: Comment;

  @ManyToOne(() => User, (user) => user.movieStats || user.commentStats)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.movieStats)
  movie: Movie;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
