// import arg from "arg";
import { generateControllers } from "./generate-module";
import kebabCase from "kebab-case";

export function cli(args) {
  const moduleName = args[2];

  if (!moduleName) {
    throw new Error("Error: a module name must be provided as argument.");
  }

  const pascalCasedModuleName = kebabCase.reverse(moduleName);

  console.log(pascalCasedModuleName);
  generateControllers(pascalCasedModuleName).then(path => {
    console.log("path", path);
  });
}
