import {access} from "fs/promises";

export async function checkFileExist(filePath: string): Promise<boolean> {
    try {
      await access(filePath);
      return true;
    } catch (err) {
      return false;
    }
  }
