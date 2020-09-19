// deps
import currentDir from "../../get-current-dir";
const sourceDir: string = `${currentDir()}/src`;

import { actions, controllerPrefixes, useCasePrefixes } from "../prefixes";

import { createFile, checkFolderExist, checkFileExist } from "../utils";

import {
  generateControllerCode,
  generateUseCaseCode,
  generateDataAccessCode,
} from "../generate-templates";

// factories
import makeGenerateController from "./generate-controller";
import makeGenerateUseCase from "./generate-use-case";
import makeGenerateDataAccess from "./generate-data-access";

// exports
export const generateController = makeGenerateController(
  sourceDir,
  createFile,
  generateControllerCode,
  checkFolderExist,
  controllerPrefixes,
  actions
);

export const generateUseCase = makeGenerateUseCase(
  sourceDir,
  createFile,
  generateUseCaseCode,
  checkFolderExist,
  useCasePrefixes,
  actions
);

export const generateDataAccess = makeGenerateDataAccess(
  sourceDir,
  createFile,
  generateDataAccessCode,
  checkFolderExist,
  checkFileExist
);
