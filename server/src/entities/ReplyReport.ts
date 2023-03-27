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

import { Reply } from './Reply';
import { Users } from './Users';

@ObjectType()
@Entity()
export class ReplyReport extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  usersId!: string;

  @Field(() => String)
  @PrimaryColumn()
  replyId!: string;

  @Field(() => Boolean)
  @Column()
  report!: boolean;

  @OneToMany(() => Reply, (reply) => reply.replyReport)
  reply: Reply[];

  @OneToMany(() => Users, (users) => users.replyReport)
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
