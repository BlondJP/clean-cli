export default (
  sourceDir: string,
  createFile: (filePath: string, data: string) => Promise<string>,
  createTemplate: (
    moduleName: string,
    prefix: string,
    action: string
  ) => string,
  checkFolderExist: (folderPath: string) => Promise<boolean>,
  controllerPrefixes: string[],
  actions: Object // maybe enum in the future
) =>
  async function generateController(
    entityName: string,
    action: string
  ): Promise<string> {
    const filePrefix: string = controllerPrefixes[actions[action]];
    const fileName: string = `${filePrefix}-${entityName}.js`;

    const controllersFolder: string = `${sourceDir}/controllers`;
    await checkFolderExist(controllersFolder);
    const filePath: string = `${controllersFolder}/${fileName}`;

    const template: string = createTemplate(entityName, filePrefix, action);
    await createFile(filePath, template);

    return filePath;
  };
