import { Comment } from './entities/Comment';
import { CommentStats } from './entities/CommentStat';
import { DataSource } from 'typeorm';
import { Follow } from './entities/Follow';
import { Movie } from './entities/Movie';
import { MovieStats } from './entities/MovieStats';
import { MovieStatsSubscriber } from './subscriptions/movieStats.subscription';
import { Platform } from './entities/Platform';
import { Reply } from './entities/Reply';
import { ReplyStats } from './entities/ReplyStats';
import { User } from './entities/User';
import path from 'path';
import { userSubscriber } from './subscriptions/user.subscription';

export const conn = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'qchat',
  username: 'postgres',
  password: '1234',
  logging: true,
  synchronize: true,
  entities: [
    User,
    Comment,
    Movie,
    Reply,
    Platform,
    MovieStats,
    CommentStats,
    ReplyStats,
    Follow,
  ],
  subscribers: [userSubscriber, MovieStatsSubscriber],
  migrations: [path.join(__dirname, '../migrations/*')],
});
