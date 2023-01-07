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

import { User } from './User';

@ObjectType()
@Entity()
export class Profile extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId!: string;

  @Index({ fulltext: true })
  @Field(() => String)
  @Column()
  firstname: string;

  @Index({ fulltext: true })
  @Field(() => String)
  @Column()
  lastname: string;

  @Field(() => String, { nullable: true })
  @Column()
  dob: string;

  @Field(() => String, { nullable: true })
  @Column()
  bio: string;

  @Field(() => String, { nullable: true })
  @Column()
  gender: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;

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
