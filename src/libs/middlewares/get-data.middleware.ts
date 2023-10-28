import { ExpressRequest } from '@models/http.model';
import { NextFunction, Response } from 'express';

export function getDataMiddleware<T>(req: ExpressRequest<T>, _res: Response, next: NextFunction): void {
  req.data = { ...req.params, ...req.body, ...req.query };
  next();
}
