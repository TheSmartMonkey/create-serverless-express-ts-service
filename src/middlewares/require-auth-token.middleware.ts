import { logger } from '@helpers/logger';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { verify } from 'jsonwebtoken';

export function requireAuthToken(req: Request, _res: Response, next: NextFunction): void {
  const authHeader: string = req?.headers?.authorization as string;
  if (!authHeader) throw createHttpError(401, 'TOKEN_IS_UNDEFINED');

  const token = authHeader.split(' ')[1];
  if (!token) throw createHttpError(401, 'TOKEN_IS_UNDEFINED');

  return verify(token, process.env.JWT_TOKEN_SECRET ?? '', (err: any, user: any) => {
    if (err) throw createHttpError(403, 'UNCORRECT_TOKEN_VERIFICATION_FAILED');
    req.body = { ...req.body, user };
    logger.info({ bodyRequireAuthTokenUser: req?.body });
    next();
  });
}
