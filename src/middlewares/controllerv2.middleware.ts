import { UserDao } from '@db/user/user.dao';
import { Context } from 'aws-lambda';
import { NextFunction, Request, Response } from 'express';

export function controllerV2(
  callback: ({
    params,
    body,
    queryParams,
    user,
    context,
  }: {
    params?: any;
    body?: any;
    queryParams?: any;
    user?: UserDao;
    context?: Context;
  }) => Promise<any>,
) {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const data = await callback({
        params: req?.params,
        body: req?.body,
        queryParams: req?.query,
        user: (req as any)?.user,
        context: (req as any).context as Context,
      });
      req.body = {
        statusCode: 200,
        body: {
          message: callback.name,
          originalUrl: req.originalUrl,
          data,
        },
      };
      next();
    } catch (error) {
      next(error);
    }
  };
}
