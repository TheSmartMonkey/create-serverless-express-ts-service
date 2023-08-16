import { Errors } from '@libs/utils/errors';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

import { logger } from '@libs/utils/logger';
import { catchAWSHttpError, formatJSONResponse } from '@libs/adapter/api-gateway';
import { HelloDto } from '@models/hello.model';
import createHttpError, { HttpError } from 'http-errors';

export async function main(event: Partial<APIGatewayProxyEvent>): Promise<APIGatewayProxyResult> {
  try {
    const message = event.pathParameters?.message;
    if (!message) throw createHttpError(StatusCodes.BAD_REQUEST, Errors.MESSAGE_NOT_PROVIDED);

    logger.info({ message }, 'hello message');

    return formatJSONResponse<HelloDto>(
      {
        message: 'Hello World !',
        data: { message },
      },
      StatusCodes.OK,
    );
  } catch (error) {
    return catchAWSHttpError<HelloDto>(error as HttpError, { message: '' });
  }
}
