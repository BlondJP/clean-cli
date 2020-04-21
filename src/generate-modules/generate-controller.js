export default (
  sourceDir,
  createFile,
  createTemplate,
  checkFolderExist,
  controllerPrefixes,
  actions
) =>
  async function generateController(moduleName, action) {
    const filePrefix = controllerPrefixes[actions[action]];
    const fileName = `${filePrefix}-${moduleName}.js`;

    const controllersFolder = `${sourceDir}/controllers`;
    await checkFolderExist(controllersFolder);
    const filePath = `${controllersFolder}/${fileName}`;

    const template = createTemplate(moduleName, filePrefix, action);
    await createFile(filePath, template);

    return filePath;
  };
