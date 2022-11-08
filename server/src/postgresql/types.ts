import { Request, Response } from 'express';

import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    userId: string;
  }
}

export type MyContext = {
  req: Request & { session: session.Session & Partial<session.SessionData> };
  res: Response;
};
