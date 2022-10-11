import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Reply } from './Reply';

@ObjectType()
@Entity()
export class Platform extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'pk_platform_id' })
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column({ type: 'text' })
  url!: string;

  @OneToMany(() => Comment, (comment) => comment.platform)
  comments: Comment[];

  @OneToMany(() => Reply, (reply) => reply.platform)
  replies: Reply[];

  @OneToMany(() => Reply, (movie) => movie.platform)
  movies: Reply[];

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
