import { NextConfig } from "next/types";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const basePath = isStaticBuild ? "/avery-shedden-me" : undefined;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const nextConfig: Partial<NextConfig> = {
  output: isStaticBuild ? "export" : undefined,
  basePath,
  trailingSlash: false,
  images: {
    unoptimized: isStaticBuild,
  },
};

console.log(`Next.js config: ${JSON.stringify(nextConfig, null, 2)}`);

export default nextConfig;
