import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Users } from './Users';

@ObjectType()
@Entity()
export class Follow extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @Field(() => String)
  @PrimaryColumn()
  followingId!: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column()
  follows: boolean;

  @ManyToOne(() => Users, (user) => user.followers)
  user: Users;

  @ManyToOne(() => Users, (user) => user.followings)
  following: Users;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
