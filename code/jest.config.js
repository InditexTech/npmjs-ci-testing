export default {
  testEnvironment: 'node',
  transform: {},
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html'],
  collectCoverageFrom: [
    'packages/**/*.js',
    '!packages/**/*.test.js',
    '!packages/**/*.spec.js',
    '!packages/**/dist/**',
    '!packages/**/node_modules/**',
    '!**/*.d.ts'
  ],
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};

