import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const repoName = process.env.BASE_PATH ? process.env.BASE_PATH : "";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

console.log(`Base path: ${repoName}`);

module.exports = {
  basePath: isStaticBuild ? `/${repoName}` : undefined,
  output: isStaticBuild ? "export" : undefined,
  trailingSlash: isStaticBuild ? true : undefined,
  images: isStaticBuild
    ? {
        unoptimized: true,
      }
    : undefined,
};
