import { NextFunction, Request, Response } from 'express';

export function sendJsonMiddleware(req: Request, res: Response, next: NextFunction): void {
  console.log(req.body);
  res.json(req.body);
}
