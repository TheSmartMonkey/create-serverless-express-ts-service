import { ExpressRequest } from '@models/http.model';
import { NextFunction, Response } from 'express';

export function controllerMiddleware<T>(callback: (data: T) => any) {
  return async (req: ExpressRequest<T>, _res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await callback(req.data);
      next();
    } catch (error) {
      next(error);
    }
  };
}
