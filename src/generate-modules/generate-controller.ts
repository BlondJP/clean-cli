export default (
  sourceDir,
  createFile,
  createTemplate,
  checkFolderExist,
  controllerPrefixes,
  actions
) =>
  async function generateController(entityName, action) {
    const filePrefix = controllerPrefixes[actions[action]];
    const fileName = `${filePrefix}-${entityName}.js`;

    const controllersFolder = `${sourceDir}/controllers`;
    await checkFolderExist(controllersFolder);
    const filePath = `${controllersFolder}/${fileName}`;

    const template = createTemplate(entityName, filePrefix, action);
    await createFile(filePath, template);

    return filePath;
  };
