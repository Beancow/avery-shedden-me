import type { NextConfig } from "next";
import path from "path";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = "avery-shedden-me";

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

  ...(isStaticBuild && { output: "export" }),

  ...(isStaticBuild && { basePath: `/${repoName}` }), // Add this line

  images: {
    ...(isStaticBuild && { unoptimized: true }),
  },
};

export default nextConfig;
