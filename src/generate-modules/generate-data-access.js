export default (
  sourceDir,
  createFile,
  createTemplate,
  checkFolderExist,
  isFileExisting,
  dataAccessPrefixes,
  actions
) =>
  async function generateDataAccess(moduleName, action) {
    const fileName = `${moduleName}-db.js`;

    const dataAccessFolder = `${sourceDir}/data-access`;
    await checkFolderExist(dataAccessFolder);
    const filePath = `${dataAccessFolder}/${fileName}`;

    const exists = await isFileExisting(filePath);
    if (!exists) {
      const template = createTemplate(action);
      await createFile(filePath, template);

      return filePath;
    }

    return null;
  };
