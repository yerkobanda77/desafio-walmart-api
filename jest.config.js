module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  bail: 1,
  verbose: true,
  testMatch: ["<rootDir>/test/**/*.spec.js"],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    "<rootDir>/src/components/modules/*.{js,jsx}",
    "<rootDir>/src/components/controllers/*.{js,jsx}",
    "!<rootDir>/src/components/controllers/healthcheck.controller.js",
  ],
}
