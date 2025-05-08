import { NextConfig } from "next/types";
import path from "path";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const basePath = isStaticBuild ? "/avery-shedden-me" : undefined;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const nextConfig: NextConfig = {
  config: {
    turbo: {
      root: path.join(__dirname, ".."),
    },
    serverExternalPackages: ["@radix-ui/themes"],
  },

  output: isStaticBuild ? "export" : undefined,
  basePath,
  images: {
    unoptimized: isStaticBuild,
  },
};

export default nextConfig;
