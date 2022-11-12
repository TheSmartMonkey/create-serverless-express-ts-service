import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';
import { formatJSONResponse } from '../../libs/adapter/aws/api-gateway';
import { logger } from './../../libs/utils/logger';

import createHttpError from 'http-errors';

export const main = async (event: Partial<APIGatewayProxyEvent>): Promise<APIGatewayProxyResult> => {
  try {
    const message = event.pathParameters?.message;
    if (!message) throw createHttpError(400, 'message not provided');

    return formatJSONResponse<string>(
      {
        message: 'Hello World !',
        data: message,
      },
      StatusCodes.OK,
    );
  } catch (error) {
    logger.error(error);
    return formatJSONResponse<string>(
      {
        message: 'Hello World !',
        data: '',
      },
      StatusCodes.CONFLICT,
    );
  }
};
