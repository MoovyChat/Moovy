import { TitleConnection } from '../connections';
import { PageInfo } from '../pagination';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  Int,
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

@Resolver()
export class TitleResolver {
  @Query(() => Title, { nullable: true })
  async getTitle(@Arg('id') id: string): Promise<Title> {
    const info = await Title.findOne({ where: { id } });
    if (!info) throw new Error('Title not found');
    return info;
  }

  @Query(() => Title, { nullable: true })
  async getTitleInfo(@Arg('id') id: string): Promise<Title> {
    const info = await Title.findOne({ where: { id } });
    if (!info) throw new Error('Title not found');
    return info;
  }

  @Query(() => TitleConnection, { nullable: true })
  async getPaginatedTitles(
    @Arg('type', () => String) type: string,
    @Arg('first', () => Int) first: number,
    @Arg('after', () => String, { nullable: true }) after: string
  ): Promise<TitleConnection> {
    // const totalCommentCount = await Comment.count({ where: { movieId: mid } });
    const query = conn
      .getRepository(Title)
      .createQueryBuilder('title')
      .where('title.type = :movie', { movie: type });

    const totalCount = await query.getCount();
    // If `after` cursor is provided, filter replies by cursor
    if (after) {
      query.andWhere('title.createdAt < :cursor', { cursor: new Date(after) });
    }
    // Get `first` number of replies, plus 1 to check for next page
    const titles = await query
      .orderBy('title.createdAt', 'DESC')
      .take(first + 1)
      .getMany();

    const nodes = titles.slice(0, first);
    const hasNextPage = titles.length > first;
    const endCursor =
      titles.length === 0
        ? String(totalCount)
        : String(titles[titles.length - 1].createdAt);
    const edges = nodes.map((node) => ({
      node,
      cursor: String(node.createdAt),
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

  @Mutation(() => Boolean, { nullable: true })
  async insertTitle(@Arg('options') options: TitleOptions) {
    let detail = await conn.getRepository(Title).insert(options);
    console.log(detail.raw[0]);
    return true;
  }
}
