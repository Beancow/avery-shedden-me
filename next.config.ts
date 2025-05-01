import type { NextConfig } from "next";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = "avery-shedden-me";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const nextConfig: NextConfig = {
  ...(isStaticBuild && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    trailingSlash: true,
  }),

  images: {
    ...(isStaticBuild && {
      unoptimized: true,
    }),
  },
};

export default nextConfig;
