export default (convertToCamelCase, capitalizeFirstLetter) =>
  function generateUseCaseCode(moduleName, prefix) {
    const formatedPrefix = convertToCamelCase(prefix);
    const camelCaseModuleName = convertToCamelCase(moduleName);

    const formatedModuleName =
      formatedPrefix.length > 0
        ? capitalizeFirstLetter(camelCaseModuleName)
        : camelCaseModuleName;

    const template = `export default (${camelCaseModuleName}Db) => async function ${formatedPrefix}${formatedModuleName}(userInfos) {

  }`;

    return template;
  };
