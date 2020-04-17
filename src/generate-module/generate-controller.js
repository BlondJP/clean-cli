export default (sourceDir, createFile, createTemplate, checkFolderExist) =>
  async function generateController(moduleName, prefix) {
    const fileName = `${prefix}-${moduleName}.js`;

    const controllersFolder = `${sourceDir}/controllers`;
    await checkFolderExist(controllersFolder);
    const filePath = `${controllersFolder}/${fileName}`;

    const template = createTemplate(moduleName, prefix);
    await createFile(filePath, template);

    return filePath;
  };
