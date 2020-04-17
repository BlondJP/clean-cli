export default (sourceDir, createFile, createTemplate, checkFolderExist) =>
  async function generateController(moduleName, prefix) {
    const fileName = `${prefix}-${moduleName}.js`;

    const controllersFolder = `${sourceDir}/controllers`;
    await checkFolderExist(controllersFolder);
    const filePath = `${controllersFolder}/${fileName}`;

    await createFile(filePath, createTemplate(moduleName, prefix));
    return filePath;
  };
