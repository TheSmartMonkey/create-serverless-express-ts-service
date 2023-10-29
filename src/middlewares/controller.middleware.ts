import { NextFunction, Request, Response } from 'express';

export function controllerMiddleware<T>(callback: (data: T) => any) {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      req.body = await callback(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
}
