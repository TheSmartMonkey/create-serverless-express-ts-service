import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import { catchAWSHttpError, formatJSONResponse } from '../../libs/adapter/aws/api-gateway';

import createHttpError from 'http-errors';
import { Errors } from '../../../src/libs/utils/errors';

export const main = async (event: Partial<APIGatewayProxyEvent>): Promise<APIGatewayProxyResult> => {
  try {
    const message = event.pathParameters?.message;
    if (!message) throw createHttpError(StatusCodes.BAD_REQUEST, Errors.MESSAGE_NOT_PROVIDED);

    return formatJSONResponse<string>(
      {
        message: 'Hello World !',
        data: message,
      },
      StatusCodes.OK,
    );
  } catch (error) {
    return catchAWSHttpError<string>(error, '');
  }
};
