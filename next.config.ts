import { NextConfig } from "next/types";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const basePath = isStaticBuild ? "/avery-shedden-me" : undefined;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const nextConfig: NextConfig = {
  basePath,
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild,
  images: {
    unoptimized: isStaticBuild,
  },
};

export default nextConfig;
