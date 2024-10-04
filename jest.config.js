/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testTimeout: 10000,
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};