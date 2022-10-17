import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
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
import { User } from './User';

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @PrimaryColumn({ primaryKeyConstraintName: 'pk_movie_id' })
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => [String])
  @Column({ type: 'text', array: true })
  likes: string[];

  @Field(() => Int)
  @Column({ type: 'int', default: 0 })
  platformId!: number;

  @OneToMany(() => Comment, (comment) => comment.movie)
  comments: Comment[];

  @OneToMany(() => Reply, (reply) => reply.movie)
  replies: Reply[];

  @OneToMany(() => MovieStats, (stats) => stats.movie)
  movieStats: MovieStats[];

  @ManyToOne(() => User, (user) => user.movies)
  viewedUsers: User[];

  @ManyToOne(() => Platform, (platform) => platform.movies)
  platform: Platform;

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
