import { Errors } from '@libs/utils/errors';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

import { catchAWSHttpError, formatJSONResponse } from '@libs/adapter/aws/api-gateway';
import { logger } from '@libs/utils/logger';
import createHttpError, { HttpError } from 'http-errors';

export async function main(event: Partial<APIGatewayProxyEvent>): Promise<APIGatewayProxyResult> {
  try {
    const message = event.pathParameters?.message;
    if (!message) throw createHttpError(StatusCodes.BAD_REQUEST, Errors.MESSAGE_NOT_PROVIDED);

    logger.info({ message }, 'hello message');

    return formatJSONResponse<string>(
      {
        message: 'Hello World !',
        data: message,
      },
      StatusCodes.OK,
    );
  } catch (error) {
    return catchAWSHttpError<string>(error as HttpError, '');
  }
}
