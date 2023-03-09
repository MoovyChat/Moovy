import { CommentResolver } from './resolvers/comments';
import { CommentStatsResolver } from './resolvers/commentStats';
import { ContactResolver } from './resolvers/contact';
import { FollowResolver } from './resolvers/follows';
import { HelloResolver } from './resolvers/hello';
import { MovieResolver } from './resolvers/movies';
import { MovieStatsResolver } from './resolvers/movieStats';
import { NotificationsResolver } from './resolvers/notifications';
import { PlatformResolver } from './resolvers/platforms';
import { ProfileResolver } from './resolvers/profile';
import { ProxyResolver } from './resolvers/proxy';
import { ReplyResolver } from './resolvers/replies';
import { ReplyStatsResolver } from './resolvers/replyStats';
import { SearchResolver } from './resolvers/search';
import { StripeResolver } from './resolvers/stripe';
import { TitleResolver } from './resolvers/movieInfo';
import { UserResolver } from './resolvers/users';
import { VisitedResolver } from './resolvers/visited';

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
  VisitedResolver,
  ProfileResolver,
  SearchResolver,
  StripeResolver,
  ProxyResolver,
  ContactResolver,
];
