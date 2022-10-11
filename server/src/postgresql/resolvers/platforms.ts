import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';

import { Platform } from '../entities/Platform';

@InputType()
class PlatformInput {
  @Field()
  name: string;
  @Field()
  url: string;
}

@Resolver()
export class PlatformResolver {
  @Query(() => [Platform])
  getAllPlatforms(): Promise<Platform[]> {
    return Platform.find();
  }

  @Query(() => Platform)
  async getMovieById(@Arg('id') id: string): Promise<Platform | null> {
    return Platform.findOne({ where: { id } });
  }

  @Mutation(() => Platform, { nullable: true })
  async createPlatform(@Arg('options') options: PlatformInput) {
    return Platform.create({
      name: options.name,
      url: options.url,
    }).save();
  }
}
