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
import { Field, ObjectType } from 'type-graphql';

import { Comment } from './Comment';
import { Users } from './Users';

@ObjectType()
@Entity()
export class CommentReport extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  usersId!: string;

  @Field(() => String)
  @PrimaryColumn()
  commentId!: string;

  @Field(() => Boolean)
  @Column()
  report!: boolean;

  @OneToMany(() => Comment, (comment) => comment.commentReport)
  comment: Comment[];

  @OneToMany(() => Users, (users) => users.commentReport)
  users: Users[];

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
