export default (
  sourceDir,
  createFile,
  createTemplate,
  checkFolderExist,
  useCasePrefixes,
  actions
) =>
  async function generateUseCase(moduleName, action) {
    const filePrefix = useCasePrefixes[actions[action]];
    const fileName = `${filePrefix}-${moduleName}.js`;

    const useCasesFolder = `${sourceDir}/use-cases`;
    await checkFolderExist(useCasesFolder);
    const filePath = `${useCasesFolder}/${fileName}`;

    const template = createTemplate(moduleName, filePrefix, action);
    await createFile(filePath, template);

    return filePath;
  };
