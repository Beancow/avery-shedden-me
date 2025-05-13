import { NextConfig } from "next";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = process.env.BASE_PATH;

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
        pathname: "/avery-shedden-me/**",
        search: "",
        // This is a workaround for the fact that Next.js doesn't support
        // local images in static builds. This is a workaround for the fact
        // that Next.js doesn't support local images in static builds.
      },
    ],
  },
} as NextConfig;
