import {
  CommentEdge,
  FeedEdge,
  MovieEdge,
  PageInfo,
  ReplyEdge,
  TitleEdge,
} from './pagination';
import { Field, Int, ObjectType } from 'type-graphql';

import { Comment } from './entities/Comment';
import { FeedItem } from './objectTypes';
import { Movie } from './entities/Movie';
import { Reply } from './entities/Reply';
import { Title } from './entities/Title';

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
export class CommentConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Comment])
  nodes: Comment[];
  @Field(() => [CommentEdge])
  edges: CommentEdge[];
}

@ObjectType()
export class UserCommentsConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Comment])
  nodes: Comment[];
  @Field(() => [CommentEdge])
  edges: CommentEdge[];
}

@ObjectType()
export class TitleConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Title])
  nodes: Title[];
  @Field(() => [TitleEdge])
  edges: TitleEdge[];
}

@ObjectType()
export class MovieConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Movie])
  nodes: Movie[];
  @Field(() => [MovieEdge])
  edges: MovieEdge[];
}

@ObjectType()
export class MovieCommentsConnection {
  @Field(() => Int)
  totalCount: number;
  @Field(() => PageInfo)
  pageInfo: PageInfo;
  @Field(() => [Comment])
  nodes: Comment[];
  @Field(() => [CommentEdge])
  edges: CommentEdge[];
}
