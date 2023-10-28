import { ExpressRequest } from '@models/http.model';
import { NextFunction, Response } from 'express';

export function getDataMiddleware<T>(req: ExpressRequest<T>, res: Response, next: NextFunction) {
  req.data = { ...req.params, ...req.body, ...req.query };
  next();
}
