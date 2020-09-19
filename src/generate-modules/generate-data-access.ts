export default (
  sourceDir: string,
  createFile: (filePath: string, data: string) => Promise<string>,
  createTemplate: (action: string) => string,
  checkFolderExist: (folderPath: string) => Promise<boolean>,
  checkFileExist: (filePath: string) => Promise<boolean>
) =>
  async function generateDataAccess(
    moduleName: string,
    action: string
  ): Promise<string> {
    const fileName = `${moduleName}-db.js`;

    const dataAccessFolder = `${sourceDir}/data-access`;
    await checkFolderExist(dataAccessFolder);
    const filePath = `${dataAccessFolder}/${fileName}`;

    const exists = await checkFileExist(filePath);
    if (!exists) {
      const template = createTemplate(action);
      await createFile(filePath, template);

      return filePath;
    } else {
      console.log(`There already is a file ${filePath}`);
    }

    return null;
  };
