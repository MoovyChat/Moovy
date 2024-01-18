import {
  Entity,
  BaseEntity,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { ObjectType, Field, registerEnumType } from "type-graphql";
import { Users } from "./Users";
import { RoomMovieObject, RoomType } from "../resolvers/rooms/roomTypes";

registerEnumType(RoomType, {
  name: "RoomType", // this one is mandatory
  description: "The basic types of rooms", // this one is optional
});

@ObjectType()
@Entity()
export class Room extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  id: string;

  @Field()
  @Column()
  name: string;

  @Field(() => RoomType)
  @Column({
    type: "enum",
    enum: RoomType,
    default: RoomType.PUBLIC,
  })
  roomType: RoomType;

  @Field(() => RoomMovieObject, { nullable: true })
  @Column({ type: "json", nullable: true })
  show: RoomMovieObject; // Information about the show currently being played.

  @Field(() => [Users])
  @OneToMany(() => Users, (user) => user.currentRoom)
  users: Users[];

  @Field(() => [Users])
  @ManyToMany(() => Users)
  @JoinTable()
  admins: Users[]; // Rooms can have multiple admins.
}
