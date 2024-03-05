import { logger } from '@helpers/logger';
import { validateOrReject } from 'class-validator';
import { NextFunction, Request, Response } from 'express';

export function dtoValidationV2({
  body,
  params,
  queryParams,
}: {
  body?: new () => any;
  params?: new () => any;
  queryParams?: new () => any;
}) {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      logger.info({ body: req?.body, params: req?.params, queryParams: req?.query });

      // Validate data
      await Promise.all([validate(req?.body, body), validate(req?.params, params), validate(req?.query, queryParams)]).catch((err) => {
        throw err;
      });
      next();
    } catch (error: any) {
      next({ ...error, statusCode: 400, message: 'DTO_VALIDATION_ERROR' });
    }
  };
}

async function validate(data: any, type?: new () => any): Promise<void> {
  if (!type) return;
  const objectToValidate = new type();
  Object.assign(objectToValidate as object, data);
  await validateOrReject(objectToValidate as any);
}
