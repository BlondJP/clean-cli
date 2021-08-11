import {access} from "fs/promises";
import createLogger from '../logger/createLogger';

export default function getCurrentDir(): string {
  const currentDir = process.env.PWD;
  const sourceDir = "/src";

  const logger = createLogger();

  access(`${currentDir}${sourceDir}`)
    .catch(() =>
        logger.warn(`Warning: there is no ${sourceDir} folder in ${currentDir}`)
    );

  return currentDir as string;
}
