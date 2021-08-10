import {access, mkdir} from "fs/promises";

async function isFolderExisting(folderPath: string): Promise<boolean> {
  try {
    await access(folderPath);
    return true;
  } catch (err) {
    return false;
  }
}

async function createFolder(folderPath: string): Promise<boolean> {
  try {
    await mkdir(folderPath, { recursive: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function checkFolderExist(folderPath: string): Promise<boolean> {
  try {
    const exists = await isFolderExisting(folderPath);
    if (!exists) {
      await createFolder(folderPath);
    }
    return true;
  } catch (err) {
    return false;
  }
}
