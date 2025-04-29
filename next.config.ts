import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  config: {
    turbo: {
      root: path.join(__dirname, ".."),
    },
    serverExternalPackages: ["@radix-ui/themes"],
  },
};

export default nextConfig;
