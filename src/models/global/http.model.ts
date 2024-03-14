import { UserDao } from '@db/user/user.dao';
import { NextFunction, Request, Response } from 'express';

export type HttpResponse<T> = {
  statusCode: number;
  body: {
    message: string;
    data?: T;
    error?: any;
  };
};

export type AwsHttpResponse = {
  statusCode: number;
  body: string;
};

export interface ExpressRequest<TOUTPUT = any, TPARAMS = any, TBODY = any, TQUERYPARAMS = any>
  extends Request<TPARAMS, any, TBODY, TQUERYPARAMS> {
  user?: UserDao;
  output?: TOUTPUT;
}

export type ExpressResponse = Response;
export type ExpressNext = NextFunction;
