import { logger } from '@helpers/logger';
import { TestValidationBodyDto } from '../dtos/test-validation.dto';

export async function testValidationService({ body }: { body: TestValidationBodyDto }): Promise<any> {
  logger.info({ body });
  return { body };
}
