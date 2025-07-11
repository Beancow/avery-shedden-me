import { NextConfig } from "next";
import process from "process";

const isStaticBuild = process.env.NEXT_PUBLIC_BUILD_TARGET === "static";
const repoName = process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : "";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

module.exports = {
  basePath: repoName,
  redirects: async () => [
    {
      source: "/",
      destination: `${repoName}/about`,
      permanent: true,
    },
  ],
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild ? true : undefined,
  images: {
    unoptimized: isStaticBuild,
    localPatterns: [
      {
        pathname: `${repoName}/**`,
        search: "",
      },
    ],
  },
} as NextConfig;
