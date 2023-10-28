import { ExpressRequest } from '@models/http.model';
import { validateOrReject } from 'class-validator';
import { NextFunction, Response } from 'express';

export function dtoValidationMiddleware<T>(type: new () => T) {
  return async (req: ExpressRequest<T>, res: Response, next: NextFunction) => {
    try {
      if (!req.data) throw new Error("You've forgot to use getDataMiddleware");
      const objectToValidate = new type();
      Object.assign(objectToValidate, req.data);
      await validateOrReject(objectToValidate as any);
      next();
    } catch (error) {
      next({ ...error, statusCode: 400, message: 'DTO_VALIDATION_ERROR' });
    }
  };
}
