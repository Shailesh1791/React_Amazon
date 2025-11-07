import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg|webp)$": "<rootDir>/__mocks__/fileMock.js"
  },
  collectCoverage: true, // ✅ enable coverage
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.{js,ts,tsx}",          // exclude entry file
    "!src/reportWebVitals.{js,ts}",
    "!src/common/**",
    "!src/hooks/reducer/**",
    "!src/hooks/customHook/**",
    "!src/DashboardRoute.tsx",
    "!src/components/**"  // optional excludes
  ],
  
  coverageReporters: ["text", "lcov", "html"], // ✅ generate text + HTML reports
};

export default config;