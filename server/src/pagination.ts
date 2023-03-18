import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './entities/Comment';
import { FeedItem } from './objectTypes';
import { Reply } from './entities/Reply';

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
export class PageInfo {
  @Field({ nullable: true })
  endCursor: string;
  @Field(() => Boolean)
  hasNextPage: boolean;
}

@ObjectType()
export class ReplyConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Reply])
  nodes: Reply[];
  @Field(() => [ReplyEdge])
  edges: ReplyEdge[];
}

@ObjectType()
export class FeedEdge {
  @Field(() => FeedItem, { nullable: true })
  node: FeedItem;
  @Field(() => String, { nullable: true })
  cursor: string;
}

@ObjectType()
export class FeedConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [FeedItem])
  nodes: FeedItem[];
  @Field(() => [FeedEdge])
  edges: FeedEdge[];
}

@ObjectType()
export class CommentOutput {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Comment])
  nodes: Comment[];
  @Field(() => [CommentEdge])
  edges: CommentEdge[];
}
