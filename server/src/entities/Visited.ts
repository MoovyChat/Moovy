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
import { Field, Int, ObjectType } from 'type-graphql';

import { Movie } from './Movie';
import { Users } from './Users';

@ObjectType()
@Entity()
export class Visited extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId!: string;

  @Field()
  @PrimaryColumn()
  movieId: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  visitCount: number;

  @Field(() => [String])
  @Column({ type: 'text', array: true, default: [] })
  history: string[];

  @ManyToOne(() => Users, (user) => user.visited)
  user: Users[];

  @ManyToOne(() => Movie, (movie) => movie.visited)
  movie: Movie[];

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
