import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Movie } from './Movie';
import { User } from './User';

@ObjectType()
@Entity()
export class CommentStats extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_comment_stats_id' })
  @Field(() => Int)
  id!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => String)
  @Column()
  commentId!: string;

  @Field(() => String)
  @Column()
  movieId!: string;

  @Field(() => String)
  @Column()
  userId!: string;

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

  @Field(() => String, { nullable: true })
  @DeleteDateColumn()
  deletedAt?: Date;
}
