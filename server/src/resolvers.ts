import { CommentResolver } from './resolvers/comments';
import { HelloResolver } from './resolvers/hello';
import { MovieResolver } from './resolvers/movies';
import { MovieStatsResolver } from './resolvers/movieStats';
import { PlatformResolver } from './resolvers/platforms';
import { UserResolver } from './resolvers/users';

export const resolvers = {
  HelloResolver,
  UserResolver,
  CommentResolver,
  MovieResolver,
  PlatformResolver,
  MovieStatsResolver,
};
