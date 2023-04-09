import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { MovieStats } from './MovieStats';
import { Platform } from './Platform';
import { Reply } from './Reply';
import { Title } from './Title';
import { Users } from './Users';
import { Visited } from './Visited';

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @PrimaryColumn({ primaryKeyConstraintName: 'pk_movie_id' })
  @Field(() => String)
  id!: string;

  @Index({ fulltext: true })
  @Field(() => String)
  @Column()
  name!: string;

  @Index({ fulltext: true })
  @Field(() => String, { nullable: true })
  @Column()
  synopsis?: string;

  @Field(() => String, { nullable: true })
  @Column()
  stills: string;

  @Field(() => String, { nullable: true })
  @Column()
  thumbs: string;

  @Field(() => String, { nullable: true })
  @Column()
  season: string;

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  year: number;

  @Field(() => Int, { defaultValue: 0 })
  @Column()
  runtime: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  likesCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  commentCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  viewsCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  favCount: number;

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @Field()
  @Column()
  titleId!: string;

  @Index({ fulltext: true })
  @Field({ nullable: true })
  @Column({ nullable: true })
  parentTitleName!: string;

  @OneToMany(() => Visited, (visit) => visit.movie)
  visited: Visited[];

  @ManyToOne(() => Title, (info) => info.movie)
  title: Title;

  @ManyToOne(() => Users, (user) => user.movies)
  viewedUsers: Users[];

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @OneToMany(() => Reply, (reply) => reply.movie)
  replies: Reply[];

  @OneToMany(() => MovieStats, (stats) => stats.movie)
  movieStats: MovieStats[];

  @ManyToOne(() => Platform, (platform) => platform.movies)
  platform: Platform;

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
