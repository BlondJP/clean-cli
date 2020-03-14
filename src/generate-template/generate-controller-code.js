export default ({ convertToCamelCase, capitalizeFirstLetter }) =>
  function generateControllerCode(moduleName, prefix) {
    const formatedPrefix = convertToCamelCase(prefix);
    let formatedModuleName = convertToCamelCase(moduleName);

    if (formatedPrefix.length > 0) {
      formatedModuleName = capitalizeFirstLetter(formatedModuleName);
    }

    const template = `export default () => async function ${formatedPrefix}${formatedModuleName}(httpRequest) {

  }`;

    return template;
  };
