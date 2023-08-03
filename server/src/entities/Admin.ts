import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field, ObjectType, registerEnumType } from "type-graphql";
import { Users } from "./Users";

export enum Role {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  USER = "USER",
}

registerEnumType(Role, {
  name: "Role", // this one is mandatory
  description: "The basic roles of admin users", // this one is optional
});

@ObjectType()
@Entity()
export class AdminUser extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  userId: string;

  @Field(() => Role, { nullable: true })
  @Column({
    type: "enum",
    enum: Role,
    default: Role.USER,
  })
  role: Role;

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
