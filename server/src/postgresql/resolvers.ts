import { CommentResolver } from './resolvers/comments';
import { CommentStatsResolver } from './resolvers/commentStats';
import { FollowResolver } from './resolvers/follows';
import { HelloResolver } from './resolvers/hello';
import { MovieResolver } from './resolvers/movies';
import { MovieStatsResolver } from './resolvers/movieStats';
import { NotificationsResolver } from './resolvers/notifications';
import { PlatformResolver } from './resolvers/platforms';
import { ReplyResolver } from './resolvers/replies';
import { ReplyStatsResolver } from './resolvers/replyStats';
import { TitleResolver } from './resolvers/movieInfo';
import { UserResolver } from './resolvers/users';

export const resolvers = [
  HelloResolver,
  UserResolver,
  CommentResolver,
  MovieResolver,
  PlatformResolver,
  MovieStatsResolver,
  CommentStatsResolver,
  ReplyResolver,
  ReplyStatsResolver,
  FollowResolver,
  NotificationsResolver,
  TitleResolver,
];
