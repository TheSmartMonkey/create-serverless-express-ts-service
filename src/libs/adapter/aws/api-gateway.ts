import type { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

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
}

export const getMessageFromJSONResponse = (response: APIGatewayProxyResult): string => {
  return JSON.parse(response.body).message;
}
