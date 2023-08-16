import { Errors } from '@libs/utils/errors';
import { APIGatewayProxyResult } from 'aws-lambda';
import { StatusCodes } from 'http-status-codes';

import { catchAWSHttpError, formatJSONResponse } from '@libs/adapter/api-gateway';
import { logger } from '@libs/utils/logger';
import { HelloDto } from '@models/hello.model';
import { Request } from 'express';
import createHttpError, { HttpError } from 'http-errors';

export async function main(request: Request): Promise<APIGatewayProxyResult> {
  try {
    const message = request.params.message;
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
