import { NextConfig } from "next";
import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = "avery-shedden-me";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

module.exports = async (
  _: any,
  { defaultConfig }: { defaultConfig: NextConfig }
) => ({
  ...defaultConfig,
  ...(isStaticBuild && {
    output: "export",
    basePath: `/${repoName}`,
    images: {
      ...defaultConfig.image,
      unoptimized: true,
    },
  }),
});
