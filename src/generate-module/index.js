// deps
const sourceDir = "/home/jp_blond/Projects/perso/clean-cli/tmp";

const appRoot = require("app-root-path");
console.log("appRoot", appRoot.path);

import createFile from "../utils/create-file";
import { generateControllerCode } from "../generate-template";

// factories
import makeGenerateControllers from "./generate-controllers";

// batery included exports
export const { generateController } = makeGenerateControllers(
  sourceDir,
  createFile,
  generateControllerCode
);
