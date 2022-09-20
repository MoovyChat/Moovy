import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Movie } from './Movie';
import { Platform } from './Platform';
import { User } from './User';

@ObjectType()
@Entity()
export class Reply extends BaseEntity {
  @PrimaryColumn()
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

  @Field(() => String)
  @Column()
  repliedUserUid!: string;

  @Field(() => String)
  @Column({ type: 'text', array: true })
  likes: string[];

  @Field(() => String)
  @Column({ type: 'text', array: true })
  replies: string[];

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @ManyToOne(() => Movie, (movie) => movie.replies)
  movie: Movie;

  @ManyToOne(() => Comment, (comment) => comment.replies)
  parentComment!: Comment;

  @ManyToOne(() => User, (user) => user.replies)
  repliedUser!: User;

  @ManyToOne(() => Platform, (platform) => platform.replies)
  platform: Platform;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
