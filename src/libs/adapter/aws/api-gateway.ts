import type { APIGatewayProxyResult } from 'aws-lambda';
import { HttpError } from 'http-errors';
import { StatusCodes } from 'http-status-codes';
import { Errors } from '@libs/utils/errors';
import { logger } from '@libs/utils/logger';

export type JsonResponse<T> = {
  message: string;
  data: T;
};

export const formatJSONResponse = <T>(response: JsonResponse<T>, statusCode: StatusCodes): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};

export const getDataFromJSONResponse = <T>(response: APIGatewayProxyResult): T => {
  return JSON.parse(response.body).data;
};

export const getMessageFromJSONResponse = (response: APIGatewayProxyResult): string => {
  return JSON.parse(response.body).message;
};

export const catchAWSHttpError = <T>(error: HttpError, data: T): APIGatewayProxyResult => {
  logger.error(error);
  return formatJSONResponse<T>(
    {
      message: error?.message ?? Errors.UNKNOWN_ERROR,
      data,
    },
    error?.statusCode ?? StatusCodes.CONFLICT,
  );
};
