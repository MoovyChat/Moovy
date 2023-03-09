import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn({ primaryKeyConstraintName: 'contact_platform_id' })
  @Field(() => String)
  id!: string;

  @Field(() => String)
  @Column()
  name!: string;

  @Field(() => String)
  @Column()
  email!: string;

  @Field(() => String)
  @Column()
  message!: string;

  @Field(() => Boolean)
  @Column()
  read: boolean;

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
