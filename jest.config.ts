export default {
  clearMocks: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coveragePathIgnorePatterns: ['.*__snapshots__/.*', '.*/index.ts', '.*/openapi.ts', '.*/schemas/.*'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'lcov',
    'clover',
    'cobertura',
  ],
  moduleNameMapper: {
    '@functions/(.*)': '<rootDir>/src/functions/$1',
    '@libs/(.*)': '<rootDir>/src/libs/$1',
    '@schemas/(.*)': '<rootDir>/src/schemas/$1',
    '@templates/(.*)': '<rootDir>/src/templates/$1',
  },
  reporters: ['default', 'jest-junit'],
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  transform: {
    '\\.(ts)$': 'ts-jest',
    '\\.html?$': [
      'esbuild-jest',
      {
        loader: { '.html': 'text' }, // see https://esbuild.github.io/content-types/
      },
    ],
  },
};
