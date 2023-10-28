import { ExpressRequest } from '@models/http.model';
import { NextFunction, Response } from 'express';

export function controllerMiddleware<T>(callback: (data: T) => any) {
  return async (req: ExpressRequest<T>, res: Response, next: NextFunction) => {
    try {
      req.body = await callback(req.data);
      next();
    } catch (error) {
      next(error);
    }
  };
}
