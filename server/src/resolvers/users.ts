import { conn } from '../dataSource';
import {
  Query,
  Resolver,
  Arg,
  Mutation,
  InputType,
  Field,
  ObjectType,
} from 'type-graphql';

import { User } from '../entities/User';
import { Comment } from '../entities/Comment';
import { MovieStats } from '../entities/MovieStats';
import { Movie } from '../entities/Movie';

@InputType()
class UserInput {
  @Field()
  uid: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  nickname: string;
  @Field()
  photoUrl: string;
}

@ObjectType()
class ErrorField {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class NickNameResponse {
  @Field(() => [ErrorField], { nullable: true })
  errors?: ErrorField[];
  @Field(() => User, { nullable: true })
  user?: User;
}

@ObjectType()
class FullUserMovieStats {
  @Field()
  user: User;
  @Field()
  movie: Movie;
  @Field({ nullable: true })
  movieStats: MovieStats;
}

@ObjectType()
class PaginatedUserComments {
  @Field(() => User)
  user: User;
  @Field(() => [Comment])
  comments: Comment[];
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  users(): Promise<User[]> {
    return User.find();
  }

  @Query(() => User, { nullable: true })
  getUser(@Arg('uid') uid: string): Promise<User | null> {
    return User.findOne({ where: { uid } });
  }

  @Query(() => [Comment], { nullable: true })
  getAllCommentsMadeByUser(@Arg('uid') uid: string): Promise<Comment[] | null> {
    let allComments;
    try {
      const user = User.findOne({ where: { uid } });
      user.then((res) => {
        if (res) {
          allComments = res.comments;
          return allComments;
        } else return undefined;
      });
      allComments;
    } catch (err) {
      console.log(err);
    }
    return new Promise(() => {});
  }

  @Query(() => PaginatedUserComments, { nullable: true })
  async getCommentsOfTheUser(
    @Arg('uid') uid: string
  ): Promise<PaginatedUserComments | null> {
    const user = await User.findOne({ where: { uid } });
    if (!user) throw new Error('User not found');
    const comments = await conn
      .getRepository(Comment)
      .createQueryBuilder('c')
      .innerJoinAndSelect(
        'c.commentedUser',
        'user',
        'user.uid = c.commentedUserUid'
      )
      .where('c.commentedUserUid = :uid', { uid })
      .getMany();
    return { user, comments };
  }

  @Query(() => FullUserMovieStats, { nullable: true })
  async getUserMovieStatus(@Arg('uid') uid: string, @Arg('mid') mid: string) {
    const user = await User.findOne({ where: { uid } });
    if (!user) throw new Error('User not found');
    const movie = await Movie.findOne({ where: { mid } });
    if (!movie) throw new Error('Movie not found');
    const movieStats = await MovieStats.findOne({
      where: { userUid: uid, movieMid: mid },
    });
    console.log(movieStats);
    if (!movieStats) throw new Error('Stats not found');
    return { user, movie, movieStats };
  }

  @Mutation(() => User, { nullable: true })
  async createUser(@Arg('options') options: UserInput) {
    // return User.create(options).save();
    let user;
    try {
      const result = await conn
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([
          {
            uid: options.uid,
            name: options.name,
            email: options.email,
            photoUrl: options.photoUrl,
            nickname: options.nickname,
          },
        ])
        .returning('*')
        .execute();
      user = result.raw[0];
    } catch (err) {
      console.log(err);
    }
    return user;
  }

  @Mutation(() => NickNameResponse)
  async updateUserNickName(
    @Arg('uid') uid: string,
    @Arg('nickname', () => String, { nullable: true }) nickname: string
  ): Promise<NickNameResponse> {
    const user = await User.findOne({ where: { uid } });
    if (!user) {
      return {
        errors: [
          {
            field: 'user',
            message: 'User not found',
          },
        ],
      };
    }

    if (nickname.length < 3) {
      return {
        errors: [
          {
            field: 'empty nick name',
            message: 'Username should be at-least 3 characters long',
          },
        ],
      };
    }

    const nickNameExist = await User.findOne({ where: { nickname } });
    if (nickNameExist) {
      return {
        errors: [
          {
            field: 'nickname',
            message: 'Username already exists',
          },
        ],
      };
    }

    if (typeof nickname !== undefined) {
      await User.update({ uid }, { nickname });
    }
    return {
      user,
    };
  }

  @Mutation(() => Boolean)
  async addMovieIdToTheUserWatchList(
    @Arg('mid') mid: string,
    @Arg('uid') uid: string
  ): Promise<boolean> {
    const user = await User.findOne({ where: { uid } });
    if (!user) throw new Error('User not found');
    else {
      let res = await conn
        .createQueryBuilder()
        .update(User)
        .set({ watchedMovies: [mid] })
        .where('uid=:uid', { uid })
        .execute();
      if (res && res.affected && res.affected > 0) return true;
    }
    return false;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Arg('uid') uid: string): Promise<boolean> {
    await User.delete(uid);
    return true;
  }
}
