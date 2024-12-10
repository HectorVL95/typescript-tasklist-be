import {Request, Response, NextFunction} from 'express'
import jwt, { decode } from 'jsonwebtoken'

export const extractToken = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  
  if (!authorization || !authorization.startsWith('Bearer')) {
    return res.status(401).json({message: 'Token not provided'})
  }

  const token = authorization.split(' ')[1];
  const decoded = jwt.decode(token)
  req.user = decoded
  console.log(req.user.userId)
  req.token = token
  next();
}