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

import { Movie } from './Movie';
import { Reply } from './Reply';
import { Users } from './Users';

@ObjectType()
@Entity()
export class ReplyStats extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_reply_stats_id' })
  @Field(() => Int)
  id!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => String)
  @Column()
  replyId!: string;

  @Field(() => String)
  @Column()
  movieId!: string;

  @Field(() => String)
  @Column()
  userId!: string;

  @ManyToOne(() => Reply, (reply) => reply.replyStats)
  reply: Reply;

  @ManyToOne(
    () => Users,
    (user) => user.movieStats || user.commentStats || user.replyStats
  )
  user: Users;

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
