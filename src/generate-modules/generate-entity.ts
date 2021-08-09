export default (
  sourceDir: string,
  createFile: (filePath: string, data: string) => Promise<string>,
  createTemplate: (
    moduleName: string,
    prefix: string,
    action: string
  ) => string,
  checkFolderExist: (folderPath: string) => Promise<boolean>,
  checkFileExist: (filePath: string) => Promise<boolean>,
  entityPrefixes: string[],
  actions: Object
) =>
  async function generateEntity(
    moduleName: string,
    action: string
  ): Promise<string> {
    const filePrefix = entityPrefixes[actions[action]];
    if (!filePrefix) {
      console.log(`The action ${action} is not available generating entity`);
      return 'No file was generated for entity\n';
    }
    const fileName = `${filePrefix}-${moduleName}.js`;

    const entitiesFolder = `${sourceDir}/entities`;
    await checkFolderExist(entitiesFolder);
    const filePath = `${entitiesFolder}/${fileName}`;

    const exists = await checkFileExist(filePath);
    if (!exists) {
      const template = createTemplate(moduleName, filePrefix, action);
      await createFile(filePath, template);
      return filePath;
    } else {
      console.log(`There already is a file ${filePath}`);
    }

    return null;
  };
