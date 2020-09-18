export default (
  sourceDir: string,
  createFile: (filePath: string, data: string) => Promise<string>,
  createTemplate: (
    moduleName: string,
    prefix: string,
    action: string
  ) => string,
  checkFolderExist: (folderPath: string) => Promise<boolean>,
  useCasePrefixes: string[],
  actions: Object // maybe enum in the future
) =>
  async function generateUseCase(
    moduleName: string,
    action: string
  ): Promise<string> {
    const filePrefix = useCasePrefixes[actions[action]];
    const fileName = `${filePrefix}-${moduleName}.js`;

    const useCasesFolder = `${sourceDir}/use-cases`;
    await checkFolderExist(useCasesFolder);
    const filePath = `${useCasesFolder}/${fileName}`;

    const template = createTemplate(moduleName, filePrefix, action);
    await createFile(filePath, template);

    return filePath;
  };
