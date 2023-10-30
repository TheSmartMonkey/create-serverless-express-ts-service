import { UserDao } from '@db/user/user.dao';
import { logger } from '@helpers/logger';
import { validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { verify } from 'jsonwebtoken';

export async function requireAuthToken(req: Request, _res: Response, next: NextFunction): Promise<void> {
  try {
    const authHeader: string = req?.headers?.authorization as string;
    if (!authHeader) throw createHttpError(401, 'TOKEN_IS_UNDEFINED');

    const token = authHeader.split(' ')[1];
    if (!token) throw createHttpError(401, 'TOKEN_IS_UNDEFINED');

    verify(token, process.env.JWT_TOKEN_SECRET ?? '', async (error: any, user: UserDao) => {
      if (error) throw createHttpError(403, 'UNCORRECT_TOKEN_VERIFICATION_FAILED');
      const userDao = new UserDao();
      Object.assign(userDao, user);
      await validateOrReject(userDao).catch((err) => next({ ...err, statusCode: 400, message: 'USER_VALIDATION_ERROR' }));
      req.body = { ...req.body, user };
      logger.info({ bodyRequireAuthTokenUser: req?.body });
      next();
    });
  } catch (error: any) {
    next({ ...error, statusCode: 400, message: 'REQUIRE_AUTH_TOKEN_ERROR' });
  }
}
