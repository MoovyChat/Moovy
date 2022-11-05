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
import { Field, Int, ObjectType } from 'type-graphql';

import { Movie } from './Movie';

@ObjectType()
@Entity()
export class Title extends BaseEntity {
  @Field()
  @PrimaryColumn()
  id!: string;

  @Field(() => String, { nullable: true })
  @Column()
  artwork: string;

  @Field(() => String, { nullable: true })
  @Column()
  boxart: string;

  @Field(() => String, { nullable: true })
  @Column()
  storyart: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  synopsis?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  type: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column({ nullable: true })
  runtime: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  year: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  rating: string;

  @Field(() => [String], { nullable: true })
  @Column({ type: 'text', array: true, default: [] })
  advisories: string[];

  @OneToMany(() => Movie, (movie) => movie.title)
  movie: Movie[];

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
