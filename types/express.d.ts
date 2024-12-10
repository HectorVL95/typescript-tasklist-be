import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        [key: string]: any; // Allow additional properties if needed
      };
      token?: string;
    }
  }
}
