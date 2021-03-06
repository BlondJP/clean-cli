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

    const template = `
module.exports = (${camelCaseModuleName}Db) =>
async function ${formatedPrefix}${formatedModuleName}(${camelCaseModuleName}Infos) {

}`;

    return template;
  };
