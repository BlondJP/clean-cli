// dependencies
import fs from "fs";

// factories
import makeCheckFolderExist from "./check-folder-exist";
import makeCreateFile from "./create-file";
import makeIsFileExisting from "./is-file-existing";

// exports
export const checkFolderExist = makeCheckFolderExist(fs);
export const createFile = makeCreateFile(fs);
export const isFileExisting = makeIsFileExisting(fs);
