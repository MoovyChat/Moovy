import { conn } from "../dataSource";
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  ObjectType,
  PubSub,
  PubSubEngine,
  Query,
  Resolver,
  Root,
  Subscription,
} from "type-graphql";

import { Comment } from "../entities/Comment";
import { Movie } from "../entities/Movie";
import { Users } from "../entities/Users";
import { MoreThan } from "typeorm";
import { LIKES_AND_COMMENT } from "../constants";
import { MovieStats } from "../entities/MovieStats";
import { MovieCommentsConnection, MovieConnection } from "../connections";
import { PageInfo } from "../pagination";
import { Title } from "../entities/Title";

@InputType()
class EpisodeInfo {
  @Field()
  id: string;
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  synopsis: string;
  @Field({ nullable: true })
  stills: string;
  @Field({ nullable: true })
  thumbs: string;
  @Field(() => Int, { defaultValue: 0 })
  runtime: number;
}

@InputType()
class SeasonInfo {
  @Field({ nullable: true })
  title: string;
  @Field(() => Int, { defaultValue: 0 })
  year: number;
  @Field(() => [EpisodeInfo], { defaultValue: [] })
  episodes: EpisodeInfo[];
}
@InputType()
class MovieFullInformation {
  @Field({ nullable: true })
  id: string;
  @Field({ nullable: true })
  title?: string;
  @Field({ nullable: true })
  type?: string;
  @Field({ nullable: true })
  artwork?: string;
  @Field({ nullable: true })
  boxart?: string;
  @Field({ nullable: true })
  storyart?: string;
  @Field({ nullable: true })
  rating?: string;
  @Field({ nullable: true })
  synopsis?: string;
  @Field(() => [String], { nullable: true, defaultValue: [] })
  advisories?: string[];
  @Field(() => Int, { defaultValue: 0 })
  runtime: number;
  @Field(() => Int, { defaultValue: 0 })
  year: number;
  @Field(() => [SeasonInfo], { nullable: true })
  seasons: SeasonInfo[];
  @Field(() => Int, { defaultValue: 1 })
  platformId: number;
}
@InputType()
class MovieInput {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  synopsis: string;
  @Field()
  stills: string;
  @Field()
  thumbs: string;
  @Field()
  season: string;
  @Field()
  parentTitleName: string;
  @Field(() => Int, { defaultValue: 0 })
  year: number;
  @Field(() => Int, { defaultValue: 0 })
  runtime: number;
  @Field({ nullable: true })
  titleId: string;
  @Field(() => Int, { defaultValue: 0 })
  likesCount: number;
  @Field(() => Int, { defaultValue: 1 })
  platformId!: number;
}

@ObjectType()
class PaginatedMovieComments {
  @Field()
  id: string;
  @Field(() => Movie)
  movie: Movie;
  @Field(() => Boolean)
  hasMoreComments: boolean;
  @Field(() => Int)
  totalCommentCount: number;
  @Field(() => [Comment])
  comments: Comment[];
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  pastLoadedCount: number;
}

@ObjectType()
class PaginatedMovieStats {
  @Field(() => [MovieStats])
  movieStats: MovieStats[];
  @Field(() => Int)
  totalCount: number;
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  page: number;
}

@ObjectType()
export class LikesObject {
  @Field(() => String)
  id: string;
  @Field(() => [Users], { defaultValue: [] })
  likes: Users[];
  @Field(() => Int)
  likesCount: number;
}

@ObjectType()
export class MovieCommentObject {
  @Field(() => Boolean)
  hasMoreComments: boolean;
  @Field(() => Int)
  totalCommentCount: number;
  @Field(() => [Comment])
  comments: Comment[];
  @Field(() => Int)
  lastPage: number;
}

@ObjectType()
export class LikesAndComment {
  @Field(() => Int)
  likesCount: number;

  @Field(() => Int)
  commentsCount: number;
}

@ObjectType()
export class PaginatedMovies {
  @Field()
  id: string;
  @Field(() => [Movie], { nullable: true })
  movies: Movie[];
  @Field(() => Int, { defaultValue: 0 })
  movieCount: number;
  @Field(() => Boolean, { defaultValue: false })
  hasMoreTitles: boolean;
  @Field(() => Int, { defaultValue: 1 })
  lastPage: number;
  @Field(() => Int, { defaultValue: 1 })
  page: number;
}

@Resolver()
export class MovieResolver {
  @Query(() => [Movie])
  getAllMovies(): Promise<Movie[]> {
    return Movie.find();
  }

  @Query(() => PaginatedMovieComments, { nullable: true })
  async getCommentsOfTheMovie(
    @Arg("mid") mid: string,
    @Arg("time", { nullable: true })
    time: string,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<PaginatedMovieComments | null> {
    const query = conn
      .getRepository(Comment)
      .createQueryBuilder("comment")
      .where("comment.movieId = :mid", { mid });
    const totalCommentCount = await query.getCount();
    if (time && time !== "") {
      query.andWhere("comment.createdAt < :time", {
        time: new Date(parseInt(time)),
      });
    }
    const pastCount = await query.getCount();
    const comments = await query
      .offset((page - 1) * 10)
      .limit(10)
      .orderBy("comment.createdAt", "DESC")
      .getMany();

    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) throw new Error("Movie not found");
    const id = `${mid}-${page}`;
    return {
      id,
      movie,
      comments: comments.slice(0, 10),
      totalCommentCount,
      pastLoadedCount: pastCount,
      lastPage: totalCommentCount === 0 ? 1 : Math.ceil(totalCommentCount / 10),
      hasMoreComments:
        page <
        (totalCommentCount === 0 ? 1 : Math.ceil(totalCommentCount / 10)),
    };
  }

  @Query(() => MovieCommentsConnection)
  async getCommentsOfTheMovieConnection(
    @Arg("mid") mid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after", () => String, { nullable: true }) after: string
  ): Promise<MovieCommentsConnection> {
    const query = conn
      .getRepository(Comment)
      .createQueryBuilder("c")
      .innerJoinAndSelect("c.movie", "movie", "movie.id = c.movieId")
      .where("c.movieId = :mid", { mid });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere("c.updatedAt < :cursor", { cursor: new Date(after) });
    }

    // Get `first` number of replies, plus 1 to check for next page
    const comments = await query
      .orderBy("c.updatedAt", "DESC")
      .take(first + 1)
      .getMany();

    const nodes = comments.slice(0, first);
    const hasNextPage = comments.length > first;
    const endCursor =
      comments.length === 0
        ? String(totalCount)
        : String(comments[comments.length - 1].updatedAt);
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.updatedAt),
    }));

    const pageInfo: PageInfo = {
      endCursor,
      hasNextPage,
    };

    return {
      totalCount,
      pageInfo,
      edges,
      nodes,
    };
  }

  @Query(() => MovieCommentObject)
  async getMovieComments(
    @Arg("id") id: string,
    @Arg("limit", () => Int) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<MovieCommentObject> {
    const query = conn
      .getRepository(Comment)
      .createQueryBuilder("comment")
      .where("comment.movieId = :id", { id });
    const count = await query.getCount();
    const comments = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return {
      comments,
      totalCommentCount: count,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
      hasMoreComments: page < (count === 0 ? 1 : Math.ceil(count / limit)),
    };
  }

  @Mutation(() => [Comment])
  async fetchNewComments(
    @Arg("mid") mid: string,
    @Arg("time") time: string
  ): Promise<Comment[]> {
    const comments = await Comment.find({
      where: { movieId: mid, createdAt: MoreThan(new Date(parseInt(time))) },
    });
    return comments;
  }

  @Query(() => Movie, { nullable: true })
  getMovie(@Arg("mid") mid: string): Promise<Movie | null> {
    return Movie.findOne({ where: { id: mid } });
  }

  @Query(() => Movie, { nullable: true })
  async getMovieById(@Arg("mid") mid: string): Promise<Movie | null> {
    const movie = await Movie.findOne({ where: { id: mid } });
    if (!movie) throw new Error(`Movie not found: ${mid}`);
    return movie;
  }

  @Query(() => MovieConnection)
  async getMoviesByTitleId(
    @Arg("tid") tid: string,
    @Arg("first", () => Int) first: number,
    @Arg("after", () => String, { nullable: true }) after: string
  ): Promise<MovieConnection> {
    const query = conn
      .getRepository(Movie)
      .createQueryBuilder("movie")
      .where("movie.titleId = :tid", { tid });
    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere("movie.id > :cursor", { cursor: after });
    }
    // Get `first` number of replies, plus 1 to check for next page
    const titles = await query
      .orderBy("movie.id", "ASC")
      .take(first + 1)
      .getMany();
    const nodes = titles.slice(0, first);
    const hasNextPage = titles.length > first;
    const endCursor =
      titles.length === 0 ? String(totalCount) : titles[titles.length - 1].id;
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.id),
    }));

    const pageInfo: PageInfo = {
      endCursor,
      hasNextPage,
    };

    return {
      totalCount,
      pageInfo,
      edges,
      nodes,
    };
  }

  @Query(() => PaginatedMovieStats, { nullable: true })
  async getFavTitles(
    @Arg("uid") uid: string,
    @Arg("limit", () => Int) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<PaginatedMovieStats | null> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) return null;
    const query = conn
      .getRepository(MovieStats)
      .createQueryBuilder("ms")
      .where("ms.userId = :uid", { uid: user.id })
      .andWhere("ms.favorite = :fav", { fav: true });
    const totalCount = await query.getCount();
    const stats = await query
      .orderBy("ms.movieId", "ASC")
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return {
      totalCount,
      page,
      movieStats: stats,
      lastPage: totalCount === 0 ? 1 : Math.ceil(totalCount / limit),
    };
  }

  @Query(() => PaginatedMovieStats, { nullable: true })
  async getLikedTitles(
    @Arg("uid") uid: string,
    @Arg("limit", () => Int) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number | 1
  ): Promise<PaginatedMovieStats | null> {
    const user = await Users.findOne({
      where: [{ id: uid }, { nickname: uid }],
    });
    if (!user) return null;
    const query = conn
      .getRepository(MovieStats)
      .createQueryBuilder("ms")
      .where("ms.userId = :uid", { uid: user.id })
      .andWhere("ms.like = :like", { like: true });
    const totalCount = await query.getCount();
    const stats = await query
      .orderBy("ms.movieId", "ASC")
      .offset((page - 1) * limit)
      .limit(limit)
      .getMany();
    return {
      totalCount,
      page,
      movieStats: stats,
      lastPage: totalCount === 0 ? 1 : Math.ceil(totalCount / limit),
    };
  }

  @Query(() => LikesAndComment, { nullable: true })
  async getMovieLikesAndCommentsCount(
    @Arg("mid") mid: string,
    @PubSub() pubSub: PubSubEngine
  ): Promise<LikesAndComment> {
    const movie = await Movie.findOne({ where: { id: mid } });
    const likesCount = movie?.likesCount!;
    const commentsCount = movie?.commentCount!;
    const payload: LikesAndComment = { likesCount, commentsCount };
    await pubSub.publish(LIKES_AND_COMMENT, payload);
    return payload;
  }

  @Query(() => LikesObject, { nullable: true })
  async getMovieLikes(@Arg("mid") mid: string): Promise<LikesObject> {
    const qb = await conn
      .getRepository(Users)
      .createQueryBuilder("user")
      .innerJoinAndSelect("user.movieStats", "stats", "stats.movieId = :mid", {
        mid,
      })
      .where("stats.like = :like", { like: true })
      .getMany();
    const result = {
      id: mid,
      likes: qb,
      likesCount: qb.length,
    };
    return result;
  }

  @Query(() => Int, { nullable: true })
  async getMovieFavoriteCount(@Arg("mid") mid: string): Promise<number> {
    const movie = await Movie.findOne({ where: { id: mid } });
    return movie?.favCount!;
  }

  @Mutation(() => Boolean, { nullable: true })
  async updateMovieTitle(
    @Arg("mid") mid: string,
    @Arg("name") name: string
  ): Promise<boolean> {
    const res = await conn
      .createQueryBuilder()
      .update(Movie)
      .set({ name })
      .where("id = :mid", { mid })
      .execute();
    if (res && res.affected && res.affected > 0) return true;
    return false;
  }

  @Mutation(() => Movie, { nullable: true })
  async insertMovie(@Arg("options") options: MovieInput) {
    try {
      parseInt(options.id);
    } catch {
      throw new Error("Invalid movie id");
    }
    // Check if the movie already exists.
    const m = await conn.getRepository(Movie).findOneBy({ id: options.id });

    if (m) return m;
    else {
      let movie;
      try {
        const result = await conn
          .createQueryBuilder()
          .insert()
          .into(Movie)
          .values([
            {
              id: options.id,
              name: options.name,
              titleId: options.titleId,
              year: options.year,
              season: options.season,
              stills: options.stills,
              thumbs: options.thumbs,
              parentTitleName: options.parentTitleName,
              synopsis: options.synopsis,
              runtime: options.runtime,
              likesCount: options.likesCount,
              platformId: 1,
            },
          ])
          .returning("*")
          .execute();
        movie = result.raw[0];
      } catch (err) {
        throw new Error(err);
      }
      return movie;
    }
  }

  @Mutation(() => Movie, { nullable: true })
  async insertMovieInformation(
    @Arg("options") options: MovieFullInformation,
    @Arg("mid") mid: string
  ) {
    const {
      id,
      type,
      artwork,
      boxart,
      storyart,
      year,
      runtime,
      synopsis,
      title,
      rating,
      advisories,
      seasons,
    } = options;

    let uniqueId = id;

    const titleRepo = conn.getRepository(Title);
    const movieRepo = conn.getRepository(Movie);

    const existing = await movieRepo.findOne({ where: { id: mid } });
    if (existing) return existing;

    // Upsert into "Title" table, irrespective of type.
    const titleResult = await titleRepo.upsert(
      {
        id: uniqueId,
        artwork,
        boxart,
        storyart,
        year,
        runtime,
        synopsis,
        title,
        type,
        rating,
        advisories,
      },
      { conflictPaths: ["id"] }
    );

    if (titleResult) {
      if (type === "movie") {
        const movieInput = {
          id: String(mid),
          name: options?.title!,
          season: "",
          stills: options?.artwork!,
          synopsis: options?.synopsis!,
          thumbs: options?.boxart!,
          parentTitleName: "",
          platformId: 1,
          runtime: options?.runtime,
          viewsCount: 1,
          titleId: uniqueId + "",
          year: options?.year,
        };
        await movieRepo.upsert(movieInput, { conflictPaths: ["id"] });
      } else if (type === "show") {
        const promises = seasons?.flatMap((season) => {
          return season.episodes.map(async (episode) => {
            const episodeInput = {
              id: episode?.id,
              name: episode?.title,
              season: season?.title,
              stills: episode?.stills,
              synopsis: episode?.synopsis,
              thumbs: episode?.thumbs,
              parentTitleName: options?.title ? options?.title : "",
              platformId: 1,
              viewsCount: String(mid) === String(episode?.id) ? 1 : 0,
              runtime: episode?.runtime,
              titleId: uniqueId + "",
              year: season?.year,
            };
            return movieRepo.upsert(episodeInput, { conflictPaths: ["id"] });
          });
        });
        await Promise.all(promises);
      }
    }

    return await movieRepo.findOne({ where: { id: mid } });
  }

  @Mutation(() => Int, { nullable: true })
  async updateMovieViewCount(@Arg("mid") mid: string): Promise<number | null> {
    const repo = conn.getRepository(Movie);
    await repo.increment({ id: mid }, "viewsCount", 1);
    const movie = await repo.findOne({ where: { id: mid } });
    if (!movie) return 0;
    return movie.viewsCount;
  }

  @Subscription(() => LikesAndComment, { topics: LIKES_AND_COMMENT })
  async likesAndCommentCount(
    @Root() root: LikesAndComment
  ): Promise<LikesAndComment> {
    return root;
  }
}
