const template = moduleName =>
  `export default (dependencies) => async function create${moduleName}() {

  }`;

import createFile from "../utils/create-file";

export default sourceDir =>
  async function generateController(moduleName) {
    const name = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
    const fileName = `create-${moduleName}.js`;
    const filePath = `${sourceDir}/${fileName}`;
    await createFile(filePath, template(name));
    return filePath;
  };
