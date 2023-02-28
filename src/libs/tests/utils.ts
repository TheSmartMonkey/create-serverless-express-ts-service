import { logger } from '@libs/utils/logger';

export function initUnitTests({ debug }: { debug: boolean }): void {
  logger.level = debug ? 'debug' : 'fatal';
}

export function initIntegrationTests({ debug }: { debug: boolean }): void {
  logger.level = debug ? 'debug' : 'fatal';
  process.env.OFFLINE = 'true';
}
