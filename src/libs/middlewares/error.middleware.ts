import { HttpResponse } from '@models/http.model';
import { NextFunction, Request, Response } from 'express';

export function errorHandlerMiddleware(error: any, req: Request, res: Response, next: NextFunction): void {
  console.error(error);
  const statusCode = error?.statusCode ?? 500;
  const message = error?.message ?? 'UNKNOWN_ERROR';
  const response: HttpResponse<undefined> = {
    statusCode,
    message,
    error,
  };
  res.status(statusCode).json(response);
}
