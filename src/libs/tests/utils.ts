import { logger } from '@libs/utils/logger';

export function initUnitTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
}

export function initIntegrationTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
  process.env.OFFLINE = 'true';
}
