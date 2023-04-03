// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  roots: ['<rootDir>/tests'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@contexts(.*)$': '<rootDir>/src/contexts$1',
    '^@configs(.*)$': '<rootDir>/src/configs$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@models(.*)$': '<rootDir>/src/models$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@tests(.*)$': '<rootDir>/tests$1',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
