import { formatHttpResponse } from '@libs/helpers/helper';
import { logger } from '@libs/helpers/logger';
import { Request, Response } from 'express';

export function errorHandlerMiddleware(error: any, _req: Request, res: Response): void {
  logger.error(error);
  const statusCode = error?.statusCode ?? 500;
  const message = error?.message ?? 'UNKNOWN_ERROR';
  const response = formatHttpResponse({
    statusCode,
    body: {
      message,
      error,
    },
  });
  res.status(statusCode).json(response);
}
