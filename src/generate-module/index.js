//deps
const sourceDir = "/home/jp_blond/Projects/clean-cli/src";
import { controllerPrefixes } from "../prefixes";
import createFile from "../utils/create-file";
import { generateControllerCode } from "../generate-template";

// factories
import makeGenerateController from "./generate-controllers";

// batery included exports
export const { generateControllers } = makeGenerateController(
  sourceDir,
  controllerPrefixes,
  createFile,
  generateControllerCode
);

console.log("generateControllers", generateControllers);
