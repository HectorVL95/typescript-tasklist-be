import {Request, Response, NextFunction} from 'express'

export const extractToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  
  if (!authorization || !authorization.startsWith('Bearer')) {
    return res.status(401).json({message: 'Token not provided'})
  }

  const token = authorization.split(' ')[1];
  req.token = token
  next();
}