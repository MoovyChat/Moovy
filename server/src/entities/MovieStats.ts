import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Movie } from './Movie';
import { Users } from './Users';

@ObjectType()
@Entity()
export class MovieStats extends BaseEntity {
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  favorite?: boolean;

  @Field(() => String, { nullable: true })
  @PrimaryColumn()
  movieId!: string;

  @Field(() => String, { nullable: true })
  @PrimaryColumn()
  userId!: string;

  @ManyToOne(() => Users, (user) => user.movieStats)
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
