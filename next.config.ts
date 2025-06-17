import { NextConfig } from "next";
import process from "process";

<<<<<<< HEAD
const isStaticBuild = process.env.NEXT_BUILD_TARGET === "static";
=======
const isStaticBuild = process.env.NEXT_PUBLIC_BUILD_TARGET === "static";
>>>>>>> f1250e8 (fix: update environment variable for static build target to NEXT_BUILD_TARGET)
const repoName = process.env.BASE_PATH
  ? `/${process.env.BASE_PATH}`
  : undefined;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

module.exports = {
  basePath: repoName,
  redirects: async () => [
    {
      source: "/",
      destination: `/about`,
      permanent: true,
    },
  ],
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild ? true : undefined,
  images: {
    unoptimized: isStaticBuild,
    localPatterns: [
      {
        pathname: `/${repoName}/**`,
        search: "",
      },
    ],
  },
} as NextConfig;
