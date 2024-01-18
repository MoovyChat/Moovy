import socketIO from "socket.io";
import DataLoader from "dataloader";
import { Request, Response } from "express";
import session from "express-session";
import { Comment } from "./entities/Comment";

declare module "express" {
  export interface Request {
    io?: socketIO.Server;
  }
}

declare module "express-session" {
  export interface SessionData {
    userId: string;
  }
}

export type MyContext = {
  req: Request & { session: session.Session & Partial<session.SessionData> };
  res: Response;
  io: socketIO.Server;
  commentLoader: DataLoader<string, Comment | undefined, string>;
};
