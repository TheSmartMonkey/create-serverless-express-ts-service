import { StatusCodes } from 'http-status-codes';
import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from './../../libs/api-gateway';
import { logger } from './../../libs/logger';

import createHttpError from 'http-errors';

const hello: ValidatedEventAPIGatewayProxyEvent<void> = async (event) => {
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

export const main = hello;
