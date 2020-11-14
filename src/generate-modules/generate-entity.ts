export default (
  sourceDir: string,
  createFile: (filePath: string, data: string) => Promise<string>,
  createTemplate: (
    moduleName: string,
    prefix: string,
    ecmaScriptEnabled: boolean
  ) => string,
  checkFolderExist: (folderPath: string) => Promise<boolean>,
  checkFileExist: (filePath: string) => Promise<boolean>,
  entityPrefixes: string[],
  actions: Object
) =>
  async function generateEntity(
    moduleName: string,
    action: string,
    ecmaScriptEnabled: boolean
  ): Promise<string> {
    const filePrefix = entityPrefixes[actions[action]];
    if (!filePrefix) {
      console.log(`The action ${action} is not available`);
      return null;
    }
    const fileName = `${filePrefix}-${moduleName}.js`;

    const entitiesFolder = `${sourceDir}/entities`;
    await checkFolderExist(entitiesFolder);
    const filePath = `${entitiesFolder}/${fileName}`;

    const exists = await checkFileExist(filePath);
    if (!exists) {
      const template = createTemplate(
        moduleName,
        filePrefix,
        ecmaScriptEnabled
      );
      await createFile(filePath, template);
      return filePath;
    } else {
      console.log(`There already is a file ${filePath}`);
    }

    return null;
  };
