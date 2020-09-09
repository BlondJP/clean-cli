// dependencies
import fs from "fs";

// factories
import makeCheckFolderExist from "./check-folder-exists";
import makeCreateFile from "./create-file";

// exports
export const checkFolderExist = makeCheckFolderExist(fs);
export const createFile = makeCreateFile(fs);
