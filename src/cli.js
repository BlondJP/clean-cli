// import arg from "arg";
import { generateController } from "./generate-module";

export function cli(args) {
  const moduleName = args[2];

  if (!moduleName) {
    throw new Error("Error: a module name must be provided as argument.");
  }

  console.log(moduleName);
  generateController(moduleName).then(path => {
    console.log("path", path);
  });
}
