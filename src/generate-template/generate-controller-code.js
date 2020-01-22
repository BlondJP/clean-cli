export default convertToCamelCase =>
  function generateControllerCode(moduleName, prefix) {
    const formatedPrefix = convertToCamelCase(prefix);
    const template = `export default () => async function ${formatedPrefix}${moduleName}() {

  }`;

    return template;
  };
