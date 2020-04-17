// deps
const sourceDir = "/home/jp_blond/Projects/perso/clean-cli/tmp";

const appRoot = require("app-root-path");
console.log("appRoot", appRoot.path);

import { createFile, checkFolderExist } from "../utils";
import { generateControllerCode } from "../generate-template";

// factories
import makeGenerateController from "./generate-controller";

// battery included exports
export const generateController = makeGenerateController(
  sourceDir,
  createFile,
  generateControllerCode,
  checkFolderExist
);
