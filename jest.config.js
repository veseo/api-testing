'use strict';

module.exports = {
  collectCoverage: false,
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  silent: false,
  forceExit: true,
  verbose: true,
  testMatch: [
    '<rootDir>/tests/*.js',
  ],
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/docs/',
  ],
  modulePathIgnorePatterns: ['node_modules'],
  setupFilesAfterEnv: [
    'jest-extended',
  ],
};
