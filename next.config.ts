import type { NextConfig } from "next";
import path from "path";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
); // Log build type

const nextConfig: NextConfig = {
  config: {
    turbo: {
      root: path.join(__dirname, ".."),
    },
    serverExternalPackages: ["@radix-ui/themes"],
  },

  ...(isStaticBuild && { output: "export" }),

  images: {
    ...(isStaticBuild && { unoptimized: true }),
  },
};

export default nextConfig;
