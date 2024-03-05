import { UserDao } from '@db/user/user.dao';
import { NextFunction, Request, Response } from 'express';

export function controllerV2(callback: ({ body, user }: { body: any; user: UserDao }) => any) {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = req.body?.user;
      if (user) delete req.body.user;
      const data = await callback({ body: req.body, user });
      req.body = {
        statusCode: 200,
        body: {
          message: callback.name,
          data,
        },
      };
      next();
    } catch (error) {
      next(error);
    }
  };
}
