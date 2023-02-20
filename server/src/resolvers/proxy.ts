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
      const html = response.data;

      const $ = cheerio.load(html);
      const title = $('title').text();
      const description = $("meta[name='description']").attr('content');
      const image = $("meta[property='og:image']").attr('content');
      const isVideo =
        $('meta[property="og:type"]').attr('content') === 'video.other';
      const videoSrc = $('video').attr('src');
      const videoType = $('video source').attr('type');
      return {
        title: title,
        description: description ? description : '',
        image: image ? image : '',
        isVideo,
        videoSrc: videoSrc ? videoSrc! : '',
        videoType: videoType ? videoType! : '',
      };
    } catch (error) {
      console.log(error);
    }
    return null;
  }
}
