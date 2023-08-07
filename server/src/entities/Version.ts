import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class Version extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  version: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  mandatory: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  notes?: string;

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
