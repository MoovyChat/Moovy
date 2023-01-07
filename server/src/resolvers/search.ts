import { Arg, Field, ObjectType, Query, Resolver } from 'type-graphql';
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
  @Field(() => [Title], { nullable: true })
  titles: Title[] | null;
}

@Resolver()
export class SearchResolver {
  @Query(() => SearchObject, { nullable: true })
  async getSearchResults(
    @Arg('search') search: string
  ): Promise<SearchObject | null> {
    // We need to get search results from User, Movie, Title tables.
    let users: User[] | null = null;
    let movies: Movie[] | null = null;
    let titles: Title[] | null = null;
    await conn.transaction(async (manager) => {
      users = await manager
        .getRepository(User)
        .createQueryBuilder('user')
        .select('*')
        .where('LOWER(user.nickname) ILIKE LOWER(:name)', {
          name: `%${search}%`,
        })
        .orderBy('LOWER(user.nickname)', 'ASC')
        .limit(5)
        .getRawMany();

      movies = await manager
        .getRepository(Title)
        .createQueryBuilder('title')
        .select('*')
        .where('LOWER(title.title) ILIKE LOWER(:name)', {
          name: `%${search}%`,
        })
        .andWhere('title.type = :type', { type: 'movie' })
        .orderBy('LOWER(title.title)', 'ASC')
        .limit(5)
        .getRawMany();

      //   const episodes = await manager
      //     .getRepository(Movie)
      //     .createQueryBuilder('movie')
      //     .select('*')
      //     .where('LOWER(movie.name) like LOWER(:name)', {
      //       name: `%${search}%`,
      //     })
      //     .orderBy('LOWER(movie.name)', 'ASC')
      //     .limit(5)
      //     .getRawMany();

      titles = await manager
        .getRepository(Title)
        .createQueryBuilder('title')
        .select('*')
        .where('LOWER(title.title) ILIKE LOWER(:name)', {
          name: `%${search}%`,
        })
        .andWhere('title.type = :type', { type: 'show' })
        .orderBy('LOWER(title.title)', 'ASC')
        .limit(5)
        .getRawMany();
    });
    return {
      users,
      movies,
      titles,
    };
  }
}
