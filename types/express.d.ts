// src/types/express.d.ts
import { Request } from 'express';

declare module 'express' {
  interface Request {
    user?: {
      id: string; // Add more fields if needed, e.g., email
      [key: string]: any; // Allow additional properties if necessary
    };
    token?: {
      id: string;
    }
  }
}
