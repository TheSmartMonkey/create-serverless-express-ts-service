import { formatHttpResponse } from '@libs/helpers/helper';
import { logger } from '@libs/helpers/logger';
import { Request, Response } from 'express';

export function sendJsonMiddleware(req: Request, res: Response): void {
  logger.info(req.body);
  res.json(formatHttpResponse(req.body));
}
