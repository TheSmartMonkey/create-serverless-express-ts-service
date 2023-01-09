import { logger } from '@libs/utils/logger';

export function initUnitTests(): void {
  logger.level = 'fatal';
}

export function initAcceptanceTests(): void {
  logger.level = 'fatal';
  process.env.OFFLINE = 'true';
}
