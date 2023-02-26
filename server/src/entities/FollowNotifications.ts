import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Users } from './Users';

@ObjectType()
@Entity()
export class FollowNotifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id!: string;

  // To whom notifications are added to.
  @Field(() => String)
  @PrimaryColumn()
  toUserId!: string;

  @Field(() => String)
  @Column()
  message!: string;

  // From whom notifications are sent.
  @Field(() => String)
  @PrimaryColumn()
  fromUser!: string;

  @Field(() => String)
  @Column()
  fromUserPhotoUrl!: string;

  @Field(() => Boolean)
  @Column()
  isRead!: boolean;

  @ManyToOne(() => Users, (user) => user.followNotifications)
  toUser: Users;

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
