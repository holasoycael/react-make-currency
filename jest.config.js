module.exports = {
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.spec.ts(x)?'],
  modulePaths: ['<rootDir>/src/']
}
