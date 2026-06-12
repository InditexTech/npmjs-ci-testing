// Example test file for reference
// Place actual test files in your packages with .test.js or .spec.js extension

/**
 * @example Example test structure for npm packages
 *
 * Real test files should be placed in:
 * - packages/core/__tests__/index.test.js
 * - packages/utils/__tests__/index.test.js
 *
 * Or in any location matching the pattern: **\/{test,__tests__}/**\/*.{test,spec}.js
 */

import { describe, it, expect } from '@jest/globals';

describe('Example Package', () => {
  it('should perform basic assertion', () => {
    expect(true).toBe(true);
  });

  it('should demonstrate test structure', () => {
    const result = 1 + 1;
    expect(result).toBe(2);
  });
});

