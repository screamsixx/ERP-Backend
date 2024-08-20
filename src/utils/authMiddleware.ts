import { Request, Response, NextFunction } from 'express';
require('dotenv').config();

const secret = process.env.JWT_SECRET?.toString() || 'your_default_secret';

export class AuthMiddleware {

  constructor() {
  }

  public async verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No autorizado' });
    }

    try {
      if(token===secret){
        console.log('Autorizado');
        next();
      }else{
      return res.status(403).json({ message: 'Prohibido' });
      }
    } catch (error) {
      console.error(error);
      return res.status(403).json({ message: 'Prohibido' });
    }
  }
}