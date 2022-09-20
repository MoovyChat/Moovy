import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Movie } from './Movie';
import { Platform } from './Platform';
import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
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

  @Field(() => [String])
  @Column({ type: 'text', array: true })
  likes: string[];

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @OneToMany(() => Reply, (reply) => reply.parentComment)
  replies: Reply[];

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
}
