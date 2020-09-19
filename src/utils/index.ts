// dependencies
import fs from "fs";

// factories
import makeCheckFolderExist from "./check-folder-exists";
import makeCreateFile from "./create-file";
import makeCheckFileExist from "./check-file-exist";

// exports
export const checkFolderExist = makeCheckFolderExist(fs);
export const createFile = makeCreateFile(fs);
export const checkFileExist = makeCheckFileExist(fs);
