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

  @Mutation(() => Boolean, { nullable: true })
  async insertTitle(@Arg('options') options: TitleOptions) {
    let detail = await conn.getRepository(Title).insert(options);
    console.log(detail.raw[0]);
    return true;
  }
}
