import process from "process";

const isStaticBuild = process.env.BUILD_TARGET === "static";
const basePath = isStaticBuild ? "/avery-shedden-me" : "";

console.log(
  `Building for: ${isStaticBuild ? "Static Export" : "SSR/Standard"}`
);

const config = {
  basePath,
  output: "export",
};

export default config;
