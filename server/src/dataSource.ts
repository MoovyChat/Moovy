import 'dotenv-safe/config';

import { AdminNotifications } from './entities/AdminNotifications';
import { Comment } from './entities/Comment';
import { CommentStats } from './entities/CommentStat';
import { Contact } from './entities/Contact';
import { DataSource } from 'typeorm';
import { Follow } from './entities/Follow';
import { FollowNotifications } from './entities/FollowNotifications';
import { LikeNotifications } from './entities/LikeNotifications';
import { Movie } from './entities/Movie';
import { MovieStats } from './entities/MovieStats';
import { MovieStatsSubscriber } from './subscriptions/movieStats.subscription';
import { Platform } from './entities/Platform';
import { Profile } from './entities/Profile';
import { Reply } from './entities/Reply';
import { ReplyStats } from './entities/ReplyStats';
import { Title } from './entities/Title';
import { Users } from './entities/Users';
import { Visited } from './entities/Visited';
import path from 'path';
import { userSubscriber } from './subscriptions/user.subscription';

export const conn = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  url: process.env.DATABASE_URL,
  logging: true,
  // synchronize: true,
  entities: [
    Users,
    Comment,
    Movie,
    Reply,
    Platform,
    MovieStats,
    CommentStats,
    ReplyStats,
    Follow,
    FollowNotifications,
    LikeNotifications,
    Title,
    Visited,
    Profile,
    AdminNotifications,
    Contact,
  ],
  subscribers: [userSubscriber, MovieStatsSubscriber],
  migrations: [path.join('dist/migrations/*.js')],
});
