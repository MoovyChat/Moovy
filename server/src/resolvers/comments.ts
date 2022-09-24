import { conn } from '../dataSource';
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
  PubSub,
  PubSubEngine,
  Subscription,
  Root,
} from 'type-graphql';

import { Comment } from '../entities/Comment';
import { User } from '../entities/User';

@InputType()
class CommentInput {
  @Field()
  message: string;
  @Field(() => [String])
  likes: string[];
  @Field(() => Int)
  likesCount: number;
  @Field()
  movieId: string;
  @Field()
  commentedUserId: string;
  @Field(() => Int)
  platformId: number;
}

@Resolver()
export class CommentResolver {
  @Query(() => [Comment])
  getAllComments(): Promise<Comment[]> {
    return Comment.find();
  }

  @Query(() => Comment)
  getComment(@Arg('cid') cid: string): Promise<Comment | null> {
    return Comment.findOne({ where: { cid } });
  }

  @Query(() => User, { nullable: true })
  async getCommentedUser(@Arg('cid') cid: string): Promise<User | null> {
    if (!cid) throw new Error('Comment id is empty');
    const user = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .innerJoinAndSelect(
        'user.comments',
        'comment',
        'comment.commentedUserUid = user.uid'
      )
      .where('comment.cid = :cid', { cid })
      .getOne();
    return user;
  }

  @Mutation(() => Comment, { nullable: true })
  async insertComment(
    @Arg('options') options: CommentInput,
    @PubSub() pubSub: PubSubEngine
  ) {
    // return User.create(options).save();
    if (!options.commentedUserId) throw new Error('User does not exist');
    let comment;
    try {
      // Insert comment.
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(Comment)
        .values([
          {
            message: options.message,
            likes: options.likes,
            movieMid: options.movieId,
            commentedUserUid: options.commentedUserId,
            platformId: options.platformId,
          },
        ])
        .returning('*')
        .execute();
      await pubSub.publish('COMMENT_COUNT_UPDATE', options.movieId);
      comment = result.raw[0];
    } catch (err) {
      throw new Error(err);
    }
    return comment;
  }

  // Whenever user comments, this subscriber gets called.
  @Subscription(() => Int, { topics: 'COMMENT_COUNT_UPDATE' })
  async movieCommentsUpdate(@Root() mid: string): Promise<number> {
    const commentsCount = await Comment.count({
      where: { movieMid: mid },
    });
    return commentsCount;
  }
}
