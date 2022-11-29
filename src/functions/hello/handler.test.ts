import { describe, expect, test } from '@jest/globals';
import { getDataFromJSONResponse } from '../../libs/adapter/aws/api-gateway';
import { executeLambda, generateValidatedAPIGatewayProxyEvent } from '../../libs/tests/mocks';
import { main } from './handler';

describe('hello', () => {
  test('Should return a message', async () => {
    // Given
    const message = 'simple message !';

    // When
    const event = generateValidatedAPIGatewayProxyEvent({
      pathParameters: { message },
    });
    const response = await executeLambda(main, event);

    // Then
    expect(getDataFromJSONResponse(response)).toEqual(message);
  });

  test('Should return a empty message', async () => {
    // Given
    const message = '';

    // When
    const event = generateValidatedAPIGatewayProxyEvent({
      pathParameters: { message },
    });
    const response = await executeLambda(main, event);

    // Then
    expect(getDataFromJSONResponse(response)).toEqual(message);
  });
});
