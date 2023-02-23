/**
 * @group integration
 */
import { describe, expect, test } from '@jest/globals';
import { initIntegrationTests } from '@libs/tests/utils';

describe('hello integration', () => {
  beforeAll(() => {
    initIntegrationTests();
  });

  test('Should return true', async () => {
    // Given
    // When
    // Then
    expect(true).toEqual(true);
  });
});
