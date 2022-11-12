import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

export type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: any };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

type jsonResponse<T> = {
  message: string;
  data: T;
}

export const formatJSONResponse = <T>(response: jsonResponse<T>, statusCode: StatusCodes): APIGatewayProxyResult => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};
