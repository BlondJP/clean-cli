export default (sourceDir, prefixes, createFile, createTemplate) => {
  async function generateController(moduleName, prefix) {
    console.log(moduleName, prefix);
    const fileName = `${prefix}-${moduleName}.js`;
    const filePath = `${sourceDir}/${fileName}`;
    await createFile(filePath, createTemplate(moduleName, prefix));
    return filePath;
  }

  async function generateControllers(moduleName) {
    prefixes.forEach(async prefix => {
      const filePath = await generateController(moduleName, prefix);
      console.log("file has been created here: ", filePath);
    });
  }

  return Object.freeze({ generateController, generateControllers });
};
