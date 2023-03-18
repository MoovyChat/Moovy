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
  @Column({ default: false })
  follows: boolean;

  @Field(() => Boolean, { defaultValue: false, nullable: true })
  @Column({ default: false, nullable: true })
  blocked: boolean;

  @Field(() => Boolean, { defaultValue: false, nullable: true })
  @Column({ default: false, nullable: true })
  reported: boolean;

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
