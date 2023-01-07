import 'reflect-metadata';
import 'dotenv-safe/config';

import { COOKIE_NAME, __prod__ } from './constants';

import { ApolloServer } from 'apollo-server-express';
import { MyContext } from './types';
import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { buildSchema } from 'type-graphql';
import { conn } from './dataSource';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { createClient } from 'redis';
import { createServer } from 'http';
import express from 'express';
import { resolvers } from './resolvers';
import session from 'express-session';
import { useServer } from 'graphql-ws/lib/use/ws';
import ws from 'ws';

const options = {
  // Your Redis Options.
  // You can leave it blank if you're just using the redis server installed on your system.
};

const getConfiguredRedisPubSub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
});

const main = async () => {
  conn
    .initialize()
    .then(async () => {
      // here you can start to work with your database
      conn.runMigrations();
    })
    .catch((error) => console.log(error));
  const app = express();
  const server = createServer(app);
  const schema = await buildSchema({
    resolvers: resolvers as any,
    pubSub: getConfiguredRedisPubSub,
    validate: false,
  });

  const RedisStore = connectRedis(session);
  const redisClient = createClient({
    url: '',
    legacyMode: true,
  });
  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: [
        process.env.CORS_ORIGIN,
        'https://studio.apollographql.com',
        'https://localhost:4000/graphql',
        'https://www.netflix.com',
        'chrome-extension://dmipflcbflebldjbgfnkcjnobneebmpo',
        'ws://localhost:4000/graphql',
        process.env.REDIS_URL,
      ],
      credentials: true,
    })
  );
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient as any,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years.
        httpOnly: true,
        sameSite: 'lax', //csrf
        secure: __prod__, // cookie only works in https.
        domain: __prod__ ? '.codeponder.com' : undefined,
      },
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({ req, res }),
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              wsServer.close();
            },
          };
        },
      },
    ],
  });
  await redisClient.connect();
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  const wsServer = new ws.Server({
    server,
    path: '/graphql',
  });

  server.listen(parseInt(process.env.PORT), () => {
    useServer({ schema }, wsServer);
    console.log(`server started on localhost:${process.env.PORT}`);
  });
};

main();
