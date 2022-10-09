import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

import { Reply } from './Reply';
import { User } from './User';

@ObjectType()
@Entity()
export class ReplyStats extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id!: number;

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  @Column({ default: false })
  like?: boolean;

  @Field(() => String)
  @Column()
  replyRid!: string;

  @Field(() => String)
  @Column()
  userUid!: string;

  @ManyToOne(() => Reply, (reply) => reply.replyStats)
  reply: Reply;

  @ManyToOne(
    () => User,
    (user) => user.movieStats || user.commentStats || user.replyStats
  )
  user: User;

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
