import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';
import Redis from 'ioredis';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { buildSchema } from 'type-graphql';
import { conn } from './dataSource';
import { createServer } from 'http';
import express from 'express';
import { resolvers } from './resolvers';
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
  const apolloServer = new ApolloServer({
    schema,
    context: () => ({}),
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

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  const wsServer = new ws.Server({
    server,
    path: '/graphql',
  });

  server.listen(4000, () => {
    useServer({ schema }, wsServer);
    console.log(`server started on localhost:4000`);
  });
};

main();
