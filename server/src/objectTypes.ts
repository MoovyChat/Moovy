import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class FeedUser {
  @Field()
  id: string;
  // Add other necessary fields from Users entity, e.g., name, photoUrl, etc.
}

@ObjectType()
export class FeedItem {
  @Field()
  id: string;
  @Field()
  type: string;
  @Field()
  compositeKey: string;
  @Field()
  commentedUserId: string;
  @Field()
  createdAt: string;
  @Field()
  updatedAt: string;
}
