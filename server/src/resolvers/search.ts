import { Arg, Field, ObjectType, Query, Resolver, Int } from 'type-graphql';
import { conn } from '../dataSource';
import { Movie } from '../entities/Movie';
import { Title } from '../entities/Title';
import { User } from '../entities/User';

@ObjectType()
class SearchObject {
  @Field(() => [User], { nullable: true })
  users: User[] | null;
  @Field(() => [Title], { nullable: true })
  movies: Title[] | null;
  @Field(() => [Movie], { nullable: true })
  episodes: Movie[] | null;
  @Field(() => [Title], { nullable: true })
  titles: Title[] | null;
}

@ObjectType()
class SearchMovieObject {
  @Field(() => [Movie], { nullable: true })
  movies: Movie[] | null;
  @Field(() => Int, { defaultValue: 1 })
  page: number;
  @Field(() => Int, { defaultValue: 1 })
  lastPage: number;
}

@ObjectType()
class SearchTitleObject {
  @Field(() => [Title], { nullable: true })
  titles: Title[] | null;
  @Field(() => Int, { defaultValue: 1 })
  page: number;
  @Field(() => Int, { defaultValue: 1 })
  lastPage: number;
}

@ObjectType()
class SearchPeopleObject {
  @Field(() => [User], { nullable: true })
  people: User[] | null;
  @Field(() => Int, { defaultValue: 1 })
  page: number;
  @Field(() => Int, { defaultValue: 1 })
  lastPage: number;
}

@Resolver()
export class SearchResolver {
  @Query(() => SearchObject, { nullable: true })
  async getSearchResults(
    @Arg('search') search: string
  ): Promise<SearchObject | null> {
    // We need to get search results from User, Movie, Title tables.
    let users: User[] | null = null;
    let movies: Title[] | null = null;
    let episodes: Movie[] | null = null;
    let titles: Title[] | null = null;
    search = search.toLowerCase();
    await conn.transaction(async (manager) => {
      users = await manager
        .getRepository(User)
        .createQueryBuilder('user')
        .select('*')
        .where('LOWER(user.nickname) LIKE :name', { name: `%${search}%` })
        .andWhere('levenshtein(LOWER(user.nickname), :keyword) <= :threshold', {
          keyword: search,
          threshold: 10,
        })
        .orderBy(`levenshtein(LOWER(user.nickname),'${search}')`, 'ASC')
        .limit(5)
        .getRawMany();

      movies = await manager
        .getRepository(Title)
        .createQueryBuilder('title')
        .select('*')
        .where('LOWER(title.title) LIKE :name', { name: `%${search}%` })
        .andWhere('title.type = :type', { type: 'movie' })
        .orderBy(`levenshtein(LOWER(title.title), '${search}')`)
        .limit(5)
        .getRawMany();

      episodes = await manager
        .getRepository(Movie)
        .createQueryBuilder('movie')
        .select('*')
        .where(
          `LOWER(movie.name) || LOWER(movie.season) || LOWER(movie.parentTitleName) || 
          LOWER((movie.parentTitleName || ' ' || movie.name || ' ' || movie.season)) ||
          LOWER((movie.parentTitleName || ' ' || movie.season)) ||
          LOWER((movie.parentTitleName || ' ' || movie.name)) ||
          LOWER(( movie.name || ' ' || movie.season))||
          LOWER((movie.season || ' ' || movie.parentTitleName)) ILIKE LOWER(:name)`,
          {
            name: `%${search}%`,
          }
        )
        .orderBy('LOWER(movie.name)', 'ASC')
        .limit(5)
        .getRawMany();

      titles = await manager
        .getRepository(Title)
        .createQueryBuilder('title')
        .select('*')
        .where('LOWER(title.title) LIKE :name', { name: `%${search}%` })
        .andWhere('title.type = :type', { type: 'show' })
        .orderBy(`levenshtein(LOWER(title.title), '${search}')`)
        .limit(5)
        .getRawMany();
    });
    return {
      users,
      movies,
      titles,
      episodes,
    };
  }

  @Query(() => SearchMovieObject, { nullable: true })
  async searchEpisodes(
    @Arg('search') search: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<SearchMovieObject | null> {
    let query = await conn
      .getRepository(Movie)
      .createQueryBuilder('movie')
      .select('*')
      .where(
        `LOWER(movie.name) || LOWER(movie.season) || LOWER(movie.parentTitleName) || 
          LOWER((movie.parentTitleName || ' ' || movie.name || ' ' || movie.season)) ||
          LOWER((movie.parentTitleName || ' ' || movie.season)) ||
          LOWER((movie.parentTitleName || ' ' || movie.name)) ||
          LOWER(( movie.name || ' ' || movie.season))||
          LOWER((movie.season || ' ' || movie.parentTitleName)) ILIKE LOWER(:name)`,
        {
          name: `%${search}%`,
        }
      )
      .orderBy('LOWER(movie.name)', 'ASC');
    let count = await query.getCount();
    let episodes = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .getRawMany();
    return {
      movies: episodes,
      page: page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }

  @Query(() => SearchTitleObject, { nullable: true })
  async searchMovies(
    @Arg('search') search: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<SearchTitleObject | null> {
    search = search.toLowerCase();
    let query = conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .select('*')
      .where('LOWER(title.title) LIKE :name', { name: `%${search}%` })
      .andWhere('title.type = :type', { type: 'movie' })
      .orderBy(`levenshtein(LOWER(title.title), '${search}')`);
    let count = await query.getCount();
    let titles = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .getRawMany();
    return {
      titles: titles,
      page: page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }

  @Query(() => SearchTitleObject, { nullable: true })
  async searchTitles(
    @Arg('search') search: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<SearchTitleObject | null> {
    search = search.toLowerCase();
    let query = conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .select('*')
      .where('LOWER(title.title) LIKE :name', { name: `%${search}%` })
      .andWhere('title.type = :type', { type: 'show' })
      .orderBy(`levenshtein(LOWER(title.title), '${search}')`);
    let count = await query.getCount();
    let titles = await query
      .limit(limit)
      .offset((page - 1) * limit)
      .getRawMany();
    return {
      titles: titles,
      page: page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }

  @Query(() => SearchPeopleObject, { nullable: true })
  async searchPeople(
    @Arg('search') search: string,
    @Arg('limit') limit: number,
    @Arg('page') page: number
  ): Promise<SearchPeopleObject | null> {
    search = search.toLowerCase();
    let query = await conn
      .getRepository(User)
      .createQueryBuilder('user')
      .select('*')
      .where('LOWER(user.nickname) LIKE :name', { name: `%${search}%` })
      .andWhere('levenshtein(LOWER(user.nickname), :keyword) <= :threshold', {
        keyword: search,
        threshold: 10,
      })
      .orderBy(`levenshtein(LOWER(user.nickname),'${search}')`, 'ASC');
    let count = await query.getCount();
    let users = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .getRawMany();
    return {
      people: users,
      page,
      lastPage: count === 0 ? 1 : Math.ceil(count / limit),
    };
  }
}
