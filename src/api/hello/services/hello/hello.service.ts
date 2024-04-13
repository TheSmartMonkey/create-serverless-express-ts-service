import { HelloDtoParamsDto } from '@api/hello/dtos/hello.dto';
import { logger } from '@helpers/logger';
import { Hello } from '@models/hello.model';

export async function helloService({ params }: { params?: HelloDtoParamsDto }): Promise<Hello> {
  logger.info({ message: params?.message }, 'hello message');
  return { message: params?.message ?? '' };
}
