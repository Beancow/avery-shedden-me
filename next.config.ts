import { NextConfig } from "next";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = process.env.BASE_PATH
  ? `/${process.env.BASE_PATH}`
  : undefined;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

module.exports = {
  basePath: repoName,
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild ? true : undefined,
  images: {
    unoptimized: isStaticBuild,
    localPatterns: [
      {
        pathname: `/${repoName}/**`,
        search: "",
      },
    ],
  },
} as NextConfig;
