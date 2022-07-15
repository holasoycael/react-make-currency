module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.spec.ts'],
  modulePaths: ['<rootDir>/src/']
}
