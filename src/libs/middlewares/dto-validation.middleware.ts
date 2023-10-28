import { ExpressRequest } from '@models/http.model';
import { validateOrReject } from 'class-validator';
import { NextFunction, Response } from 'express';
import createHttpError from 'http-errors';

export async function dtoValidationMiddleware<T>(type: new () => T) {
  return async (req: ExpressRequest<T>, _res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.data) throw createHttpError(500, "You've forgot to use getDataMiddleware");
      const objectToValidate = new type();
      Object.assign(objectToValidate as object, req.data);
      await validateOrReject(objectToValidate as any);
      next();
    } catch (error: any) {
      next({ ...error, statusCode: 400, message: 'DTO_VALIDATION_ERROR' });
    }
  };
}
