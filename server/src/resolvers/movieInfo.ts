import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  Int,
  ObjectType,
} from 'type-graphql';
import { conn } from '../dataSource';
import { Title } from '../entities/Title';

@InputType()
class TitleOptions {
  @Field()
  id: string;

  @Field(() => String)
  artwork: string;

  @Field(() => String)
  boxart: string;

  @Field(() => String)
  storyart: string;

  @Field(() => Int, { defaultValue: 0 })
  year: number;

  @Field(() => Int, { defaultValue: 0 })
  runtime: number;

  @Field(() => String)
  synopsis: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  type: string;

  @Field(() => String)
  rating: string;

  @Field(() => [String])
  advisories: string[];
}

@ObjectType()
class PaginatedTitles {
  @Field(() => [Title])
  titles: Title[];
  @Field(() => Boolean)
  hasMoreTitles: boolean;
  @Field(() => Int)
  totalTitleCount: number;
  @Field(() => Int)
  lastPage: number;
  @Field(() => Int)
  page: number;
}

@Resolver()
export class TitleResolver {
  @Query(() => Title, { nullable: true })
  async getTitle(@Arg('id') id: string): Promise<Title> {
    const info = await Title.findOne({ where: { id } });
    if (!info) throw new Error('Title not found');
    return info;
  }

  @Mutation(() => Title, { nullable: true })
  async getTitleInfo(@Arg('id') id: string): Promise<Title> {
    const info = await Title.findOne({ where: { id } });
    if (!info) throw new Error('Title not found');
    return info;
  }

  @Query(() => PaginatedTitles, { nullable: true })
  async getPaginatedMovies(
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1,
    @Arg('ASC', () => Boolean, { defaultValue: true }) ASC: boolean | true
  ): Promise<PaginatedTitles | null> {
    // const totalCommentCount = await Comment.count({ where: { movieId: mid } });
    const query = conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .where('title.type = :movie', { movie: 'movie' });

    const totalTitleCount = await query.getCount();
    const titles = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('title.id', ASC ? 'ASC' : 'DESC')
      .getMany();

    return {
      page,
      titles: titles.slice(0, limit),
      totalTitleCount,
      hasMoreTitles: titles.length === totalTitleCount + 1,
      lastPage: totalTitleCount === 0 ? 1 : Math.ceil(totalTitleCount / limit),
    };
  }

  @Query(() => PaginatedTitles, { nullable: true })
  async getPaginatedShows(
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1,
    @Arg('ASC', () => Boolean, { defaultValue: true }) ASC: boolean | true
  ): Promise<PaginatedTitles | null> {
    const query = conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .where('title.type = :movie', { movie: 'show' });

    const totalTitleCount = await query.getCount();
    const titles = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('title.id', ASC ? 'ASC' : 'DESC')
      .getMany();

    return {
      page,
      titles: titles.slice(0, limit),
      totalTitleCount,
      hasMoreTitles: titles.length === totalTitleCount + 1,
      lastPage: totalTitleCount === 0 ? 1 : Math.ceil(totalTitleCount / limit),
    };
  }

  @Query(() => PaginatedTitles, { nullable: true })
  async getPaginatedTitles(
    @Arg('limit', () => Int) limit: number,
    @Arg('page', () => Int, { defaultValue: 1 }) page: number | 1,
    @Arg('ASC', () => Boolean, { defaultValue: true }) ASC: boolean | true,
    @Arg('type', { nullable: true, defaultValue: '' }) type: string | ''
  ): Promise<PaginatedTitles | null> {
    // const totalCommentCount = await Comment.count({ where: { movieId: mid } });
    const query = conn.getRepository(Title).createQueryBuilder('title');
    if (type !== '') {
      query.where('title.type = :movie', { movie: type });
    }
    const totalTitleCount = await query.getCount();
    const titles = await query
      .offset((page - 1) * limit)
      .limit(limit)
      .orderBy('title.id', ASC ? 'ASC' : 'DESC')
      .getMany();

    return {
      titles: titles.slice(0, limit),
      totalTitleCount,
      page,
      hasMoreTitles: titles.length === totalTitleCount + 1,
      lastPage: totalTitleCount === 0 ? 1 : Math.ceil(totalTitleCount / limit),
    };
  }

  @Mutation(() => Boolean, { nullable: true })
  async insertTitle(@Arg('options') options: TitleOptions) {
    let detail = await conn.getRepository(Title).insert(options);
    console.log(detail.raw[0]);
    return true;
  }
}
