import { logger } from '@libs/helpers/logger';

export function initUnitTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
}

export function initIntegrationTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
  process.env.OFFLINE = 'true';
}
