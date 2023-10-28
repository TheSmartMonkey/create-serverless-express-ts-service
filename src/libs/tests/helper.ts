import { logger } from '@libs/helpers/logger';
import { APIGatewayProxyResult } from 'aws-lambda';

export function initUnitTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
}

export function initIntegrationTests(): void {
  logger.level = process.env.NO_LOGS === 'true' ? 'fatal' : 'debug';
  process.env.OFFLINE = 'true';
}

export function getDataFromJSONResponse<T>(response: APIGatewayProxyResult): T {
  return JSON.parse(response.body).data;
}

export function getMessageFromJSONResponse(response: APIGatewayProxyResult): string {
  return JSON.parse(response.body).message;
}
