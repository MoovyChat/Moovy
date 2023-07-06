import "reflect-metadata";
import "dotenv-safe/config";

import { COOKIE_NAME, __prod__ } from "./constants";
import Redis, { RedisOptions } from "ioredis";

import { ApolloServer } from "apollo-server-express";
import { MyContext } from "./types";
import { RedisPubSub } from "graphql-redis-subscriptions";
import bodyParser from "body-parser";
import { buildSchema } from "type-graphql";
import compression from "compression";
import { conn } from "./dataSource";
import connectRedis from "connect-redis";
import cors from "cors";
import { createClient } from "redis";
import { createServer } from "http";
import express from "express";
import { resolvers } from "./resolvers";
import session from "express-session";
import { useServer } from "graphql-ws/lib/use/ws";
import ws from "ws";
import scrapePage from "./scrape";

const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const regex = /^redis:\/\/(?::(.*)@)?(.*):(\d+)$/;
const matchResult = redisUrl.match(regex);
if (!matchResult) {
  throw new Error("Invalid Redis connection string");
}

const [_, password, host, portStr] = matchResult;
const port = parseInt(portStr, 10);
const options: RedisOptions = {
  host,
  port,
  password: password ?? "",
};
const redisClient = createClient({
  url: redisUrl,
  legacyMode: true,
});
const getConfiguredRedisPubSub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options),
});

const main = async () => {
  await conn.initialize();
  // await conn.runMigrations();
  const app = express();

  // Enable gzip compression for all resources
  app.use(compression());

  // Serve your app's static resources
  app.use(express.static("public", { maxAge: "1d" }));

  // Set cache headers for /graphql
  app.use("/graphql", (_req, res, next) => {
    res.set("Cache-Control", "public, max-age=86400"); // 1 day
    next();
  });

  // Increase the maximum request size limit to 50MB
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

  const server = createServer(app);
  const schema = await buildSchema({
    resolvers: resolvers as any,
    pubSub: getConfiguredRedisPubSub,
    validate: false,
  });

  const RedisStore = connectRedis(session);
  const corsOptions = {
    origin: [
      process.env.CORS_ORIGIN,
      "https://studio.apollographql.com",
      "https://server.moovychat.com/graphql",
      "https://www.moovychat.com",
      "https://www.aha.video",
      "ws://server.moovychat.com/graphql",
      "wss://server.moovychat.com/graphql",
      "https://www.netflix.com",
      "http://localhost:4000",
      "http://localhost:4000/graphql",
      "chrome-extension://ilkpekdilkpahngoeanmpnkegideejip",
      process.env.REDIS_URL,
    ],
    credentials: true,
  };
  app.set("trust proxy", 1);
  app.use(cors(corsOptions));

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
        sameSite: "lax", //csrf
        secure: __prod__, // cookie only works in https.
        domain: __prod__ ? ".moovychat.com" : undefined,
      },
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  const wsServer = new ws.Server({
    server,
    path: "/graphql",
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({ req, res }),
    persistedQueries: false,
    introspection: __prod__ ? false : true,
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
  try {
    await redisClient.connect();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  try {
    await apolloServer.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  const port = process.env.PORT || "5000";

  app.post("/scrape", (req, res) => {
    (async () => {
      console.log(req.body);

      const url = req.body.url;

      if (!url) {
        res.status(400).send("Missing url in request body");
        return;
      }

      try {
        const data = await scrapePage(url);
        console.log(data); // log scraped data

        // Send scraped data as the response
        res.json(data);
      } catch (error) {
        console.error(`Failed to scrape page: ${error}`);
        res.status(500).json({
          message: "Failed to scrape page",
          error: error.toString(),
        });
      }
    })().catch((err) => {
      console.error(`Error in /scrape: ${err}`);
      res.status(500).send("Internal server error");
    });
  });

  server.listen(parseInt(port as string), () => {
    console.log(`server started on localhost:${port}`);
    useServer({ schema }, wsServer);
  });
};

main();
