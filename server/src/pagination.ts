import { Field, ObjectType } from 'type-graphql';

import { Comment } from './entities/Comment';
import { FeedItem } from './objectTypes';
import { Reply } from './entities/Reply';
import { Title } from './entities/Title';

@ObjectType()
export class ReplyEdge {
  @Field(() => Reply, { nullable: true })
  node: Reply;
  @Field(() => String, { nullable: true })
  cursor: string;
}

@ObjectType()
export class CommentEdge {
  @Field(() => Comment, { nullable: true })
  node: Comment;
  @Field(() => String, { nullable: true })
  cursor: string;
}

@ObjectType()
export class TitleEdge {
  @Field(() => Title, { nullable: true })
  node: Title;
  @Field(() => String, { nullable: true })
  cursor: string;
}

@ObjectType()
export class PageInfo {
  @Field({ nullable: true })
  endCursor: string;
  @Field(() => Boolean)
  hasNextPage: boolean;
}

@ObjectType()
export class FeedEdge {
  @Field(() => FeedItem, { nullable: true })
  node: FeedItem;
  @Field(() => String, { nullable: true })
  cursor: string;
}
