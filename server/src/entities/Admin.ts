import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Users } from './Users';

@ObjectType()
@Entity()
export class AdminUser extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId: string;

  @Field(() => String, { nullable: true })
  @Column()
  role: string;

  @ManyToOne(() => Users, (user) => user.admin)
  user: Users;

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
