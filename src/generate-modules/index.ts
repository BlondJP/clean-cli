// deps
import currentDir from "../../get-current-dir";
const sourceDir: string = `${currentDir()}/src`;

import {
  actions,
  controllerPrefixes,
  useCasePrefixes,
  entityPrefixes,
} from "../prefixes";

import { createFile, checkFolderExist, checkFileExist } from "../utils";

import {
  generateControllerCode,
  generateUseCaseCode,
  generateDataAccessCode,
  generateEntityCode,
} from "../generate-templates";

// factories
import makeGenerateController from "./generate-controller";
import makeGenerateUseCase from "./generate-use-case";
import makeGenerateDataAccess from "./generate-data-access";
import makeGenerateEntity from "./generate-entity";

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

export const generateEntity = makeGenerateEntity(
  sourceDir,
  createFile,
  generateEntityCode,
  checkFolderExist,
  checkFileExist,
  entityPrefixes,
  actions
);
