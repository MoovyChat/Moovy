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

import { User } from './User';

@ObjectType()
@Entity()
export class Follow extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @Field(() => String)
  @PrimaryColumn()
  followerId!: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column()
  follows: boolean;

  @ManyToOne(() => User, (user) => user.followings)
  user: User;

  @ManyToOne(() => User, (user) => user.followers)
  follower: User;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
