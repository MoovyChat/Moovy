import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Movie } from './Movie';
import { User } from './User';

@ObjectType()
@Entity()
export class MovieStats extends BaseEntity {
  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  favorite?: boolean;

  @Field(() => String)
  @PrimaryColumn()
  movieId!: string;

  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @ManyToOne(() => User, (user) => user.movieStats)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.movieStats)
  movie: Movie;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => String)
  @DeleteDateColumn()
  deletedAt?: Date;
}
