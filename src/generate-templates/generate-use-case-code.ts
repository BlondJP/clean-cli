export default (
  convertToCamelCase: (str: string) => string,
  capitalizeFirstLetter: (str: string) => string
) =>
  function generateUseCaseCode(moduleName: string, prefix: string) {
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
