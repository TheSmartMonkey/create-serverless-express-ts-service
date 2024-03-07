/**
 * @group unit
 */
import { describe, expect, test } from '@jest/globals';
import { fakeHelloDto } from '@tests/fake';
import { initUnitTests } from '@tests/helper';
import { helloService } from './hello.service';

describe('hello unit', () => {
  beforeAll(() => {
    initUnitTests();
  });

  test('Should return a message', async () => {
    // Given
    const message = 'simple message !';
    const helloDto = fakeHelloDto({ messages: message });

    // When
    const response = await helloService(helloDto);

    // Then
    expect(response).toEqual({ message });
  });

  test('Should return a empty message', async () => {
    // Given
    const message = '';
    const helloDto = fakeHelloDto({ messages: message });

    // When
    const response = await helloService(helloDto);

    // Then
    expect(response).toEqual({ message });
  });
});
