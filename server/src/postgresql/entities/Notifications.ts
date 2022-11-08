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

import { User } from './User';

@ObjectType()
@Entity()
export class Notifications extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => String)
  @PrimaryColumn()
  fromUser!: string;

  @Field(() => String)
  @Column()
  fromUserPhotoUrl!: string;

  @Field(() => Boolean)
  @Column()
  isRead!: boolean;

  @ManyToOne(() => User, (user) => user.notifications)
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
