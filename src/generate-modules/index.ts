// deps
import currentDir from "../../get-current-dir";
const sourceDir: string = `${currentDir()}/src`;

import { actions, controllerPrefixes } from "../prefixes";

import { createFile, checkFolderExist } from "../utils";

import { generateControllerCode } from "../generate-templates";

// factories
import makeGenerateController from "./generate-controller";

// exports
export const generateController = makeGenerateController(
  sourceDir,
  createFile,
  generateControllerCode,
  checkFolderExist,
  controllerPrefixes,
  actions
);
