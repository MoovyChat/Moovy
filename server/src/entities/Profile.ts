import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

import { Users } from './Users';

@ObjectType()
@Entity()
export class Profile extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @Index({ fulltext: true })
  @Field(() => String, { defaultValue: '', nullable: true })
  @Column({ nullable: true, default: '' })
  fullname: string;

  @Field(() => String, { nullable: true })
  @Column()
  dob: string;

  @Field(() => String, { nullable: true })
  @Column()
  bio: string;

  @Field(() => String, { nullable: true })
  @Column()
  gender: string;

  @OneToOne(() => Users, (user) => user.profile)
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
