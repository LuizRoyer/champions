module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '@src/(.*)': '<rootDir>/src/$1',
      '@test/(.*)': '<rootDir>/test/$1',
    }
  };