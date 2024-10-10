import { IncomingMessage, ServerResponse } from "http";
import { Redis } from "ioredis";
import { Request, Response } from "express";

declare module "express-session" {
  interface SessionData {
    userId: string; // or number, depending on your userId type
  }
}

export type MyContext = {
  req: IncomingMessage & Request; // Extend to include Express's Request
  res: ServerResponse & Response; // Extend to include Express's Response
  redisClient: Redis;
};
