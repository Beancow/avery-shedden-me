import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = process.env.REPO_NAME;

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

module.exports = {
  basePath: isStaticBuild ? `/${repoName}` : undefined,
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild ? true : undefined,
  images: isStaticBuild
    ? {
        unoptimized: true,
        loader: "custom",
        loaderFile: "src/utils/imageLoader.ts",
      }
    : undefined,
};
