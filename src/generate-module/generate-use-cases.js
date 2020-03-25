export default (sourceDir, createFile, createTemplate) => {
  async function generateUseCase(moduleName, prefix) {
    const fileName = `${prefix}-${moduleName}.js`;
    const filePath = `${sourceDir}/${fileName}`;
    await createFile(filePath, createTemplate(moduleName, prefix));
    return filePath;
  }

  return Object.freeze({ generateUseCase });
};
