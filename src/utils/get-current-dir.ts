import {access} from "fs/promises";

export default function getCurrentDir(): string {
  const currentDir = process.env.PWD;
  const sourceDir = "/src";

  access(`${currentDir}${sourceDir}`)
    .catch(() =>
      console.warn(`Warning: there is no ${sourceDir} folder in ${currentDir}`)
    );

  return currentDir as string;
}
