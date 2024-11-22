import "reflect-metadata";
import "dotenv-safe/config";
import Redis from "ioredis";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { buildSchema } from "type-graphql";
import { RedisPubSub } from "graphql-redis-subscriptions";
import { MyContext } from "./types";
import { conn } from "./dataSource";
import { resolvers } from "./resolvers";
import compression from "compression";
import express from "express";
import session from "express-session";
import cors from "cors";
import ws from "ws";
import scrapePage from "./scrape";
import { createServer } from "http";
import { __prod__, COOKIE_NAME } from "./constants";
import { useServer } from "graphql-ws/lib/use/ws";
import RedisStore from "connect-redis";
import bodyParser from "body-parser";

// Redis setup
const redisUrl = process.env.REDIS_URL || "redis://localhost:6379";
const redisClient = new Redis(redisUrl);

const getConfiguredRedisPubSub = new RedisPubSub({
  publisher: new Redis(redisUrl),
  subscriber: new Redis(redisUrl),
});

const main = async () => {
  await conn.initialize();
  await conn.runMigrations();

  // Express setup for non-GraphQL routes and additional middleware
  const app = express();

  // Enable CORS middleware
  app.use(
    cors({
      origin: (origin, callback) => {
        const allowedOrigins = [
          "https://moovychat.com",
          "https://www.moovychat.com",
        ];
        if (allowedOrigins.includes(origin ?? "") || !origin) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      credentials: true, // Allow cookies and credentials
      methods: ["GET", "POST", "OPTIONS"], // Allowed HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
    })
  );

  // Explicitly handle preflight requests
  app.options("*", cors());

  // Enable gzip compression for all resources
  app.use(compression());

  // Serve static resources
  app.use(express.static("public", { maxAge: "1d" }));

  // Increase the maximum request size limit
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        sameSite: "lax", // CSRF protection
        secure: __prod__,
        domain: __prod__ ? ".moovychat.com" : undefined,
      },
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
    })
  );

  // WebSocket server setup (GraphQL subscriptions)
  const httpServer = createServer(app);
  const wsServer = new ws.Server({ server: httpServer, path: "/graphql" });

  // Build the GraphQL schema
  const schema = await buildSchema({
    resolvers: resolvers as any,
    pubSub: getConfiguredRedisPubSub,
    validate: false,
  });

  // Initialize Apollo Server
  const apolloServer = new ApolloServer<MyContext>({
    schema,
    introspection: !__prod__,
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

  // Start Apollo Server and integrate it with Express
  await apolloServer.start();
  app.use(
    "/graphql",
    bodyParser.json(), // Body parsing middleware for handling GraphQL requests
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => {
        return { req, res, redisClient };
      },
    })
  );

  console.log(
    `🚀 GraphQL server ready at http://localhost:${
      process.env.PORT || 5000
    }/graphql`
  );

  // Define scraping route
  app.post("/scrape", async (req, res) => {
    const url = req.body.url;
    if (!url) {
      res.status(400).send("Missing URL in request body");
      return;
    }

    try {
      const data = await scrapePage(url);
      res.json(data);
    } catch (error) {
      console.error("Failed to scrape page:", error);
      res.status(500).json({
        message: "Failed to scrape page",
        error: error.toString(),
      });
    }
  });

  // Graceful shutdown for Redis and HTTP server
  process.on("SIGINT", async () => {
    console.log("SIGINT signal received: closing Redis client");
    await redisClient.quit();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    console.log("SIGTERM signal received: closing Redis client");
    await redisClient.quit();
    process.exit(0);
  });

  // Start the HTTP server for Express
  httpServer.listen(parseInt(process.env.PORT || "5000"), "0.0.0.0", () => {
    console.log(`Server started on http://0.0.0.0:${process.env.PORT || 5000}`);
    // GraphQL WS Subscription handler
    useServer({ schema }, wsServer);
  });
};

main();
