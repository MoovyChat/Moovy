import { InputType, Field, ObjectType } from "type-graphql";

export enum RoomType {
  PUBLIC = "public",
  PRIVATE = "private",
}

@ObjectType()
export class RoomMovieObject {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  platform?: string;

  @Field()
  parentTitleName?: string;

  @Field()
  thumbs: string;
}

@InputType()
export class RoomMovieInput {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  platform?: string;

  @Field()
  parentTitleName?: string;

  @Field()
  thumbs: string;
}

@InputType()
export class JoinRoomInput {
  @Field()
  roomId: string;

  @Field()
  userId: string;
}

@InputType()
export class CreateRoomInput {
  @Field()
  roomId: string;

  @Field()
  roomName: string;

  @Field()
  userId: string;

  @Field()
  url: string;

  @Field()
  isPublic: boolean;

  @Field(() => RoomMovieInput, { nullable: true }) // Assuming you have an InputType for Movie
  movie: RoomMovieInput;
}
