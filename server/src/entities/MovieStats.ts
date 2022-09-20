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

import { Movie } from './Movie';
import { User } from './User';

@ObjectType()
@Entity()
export class MovieStats extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  favorite?: boolean;

  @Field(() => String)
  @Column()
  movieMid!: string;

  @Field(() => String)
  @Column()
  userUid!: string;

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
}
