import { NextConfig } from "next/types";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = process.env.REPO_NAME;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const nextConfig = (): Partial<NextConfig> => {
  if (isStaticBuild) {
    return {
      basePath: `/${repoName}`,
      assetPrefix: `/${repoName}/`,
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    };
  }
  return {};
};

console.log(`Next.js config: ${JSON.stringify(nextConfig, null, 2)}`);

export default nextConfig;
