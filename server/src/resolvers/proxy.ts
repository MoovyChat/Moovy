import axios from 'axios';
import cheerio from 'cheerio';
import { Arg, ObjectType, Resolver, Field, Query } from 'type-graphql';

@ObjectType()
class LinkPreview {
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  image: string;
  @Field(() => Boolean, { nullable: true })
  isVideo: boolean;
  @Field(() => String, { nullable: true })
  videoSrc: string;
  @Field(() => String, { nullable: true })
  videoType: string;
}

@Resolver()
export class ProxyResolver {
  @Query(() => LinkPreview, { nullable: true })
  async getLinkPreview(@Arg('url') url: string): Promise<LinkPreview | null> {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      const title = $(
        'meta[property="og:title"], meta[name="twitter:title"]'
      ).attr('content');
      const description = $(
        'meta[property="og:description"], meta[name="twitter:description"]'
      ).attr('content');
      const image = $(
        'meta[property="og:image"], meta[name="twitter:image"]'
      ).attr('content');
      const videoElement = $('video').first();
      const videoSrc =
        videoElement.find('source').attr('src') || videoElement.attr('src');
      const videoType =
        videoElement.find('source').attr('type') || videoElement.attr('type');

      return {
        title: title ? title : '',
        description: description ? description : '',
        image: image ? image : '',
        isVideo: videoElement ? true : false,
        videoSrc: videoSrc ? videoSrc! : '',
        videoType: videoType ? videoType! : '',
      };
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
