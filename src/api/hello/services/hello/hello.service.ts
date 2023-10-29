import { logger } from '@libs/helpers/logger';
import { HttpResponse } from '@models/http.model';
import { HelloDto } from '@api/hello/dtos/hello.dto';

export async function helloService(helloDto: HelloDto): Promise<HttpResponse<HelloDto>> {
  logger.info({ message: helloDto.message }, 'hello message');
  return {
    statusCode: 200,
    body: {
      message: 'Hello World !',
      data: helloDto,
    },
  };
}
