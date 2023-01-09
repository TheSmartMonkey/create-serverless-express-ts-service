/**
 * @group acceptance
 */
import { describe, expect, test } from '@jest/globals';
import { initAcceptanceTests } from '@libs/tests/utils';

describe('hello acceptance', () => {
  beforeAll(() => {
    initAcceptanceTests();
  });

  test('Should return true', async () => {
    // Given
    // When
    // Then
    expect(true).toEqual(true);
  });
});
