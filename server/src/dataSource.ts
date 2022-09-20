import { Comment } from './entities/Comment';
import { DataSource } from 'typeorm';
import { Movie } from './entities/Movie';
import { MovieStats } from './entities/MovieStats';
import { MovieStatsSubscriber } from './subscriptions/movieStats.subscription';
import { Platform } from './entities/Platform';
import { Reply } from './entities/Reply';
import { User } from './entities/User';
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
  entities: [User, Comment, Movie, Reply, Platform, MovieStats],
  subscribers: [userSubscriber, MovieStatsSubscriber],
  migrations: [],
});
