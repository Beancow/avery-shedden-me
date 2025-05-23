import nextJest from "next/jest";
import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
    "@/(.*)$": "<rootDir>/$1",
    "@/pages/(.*)$": ["<rootDir>/src/pages/*"],
    "@/data/(.*)$": ["<rootDir>/src/data/*"],
    "@/components/(.*)$": ["<rootDir>/src/components/*"],
    "@/public/(.*)$": ["<rootDir>/public/*"],
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = createJestConfig(customJestConfig);
