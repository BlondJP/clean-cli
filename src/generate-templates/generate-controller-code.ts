export default (
  convertToCamelCase,
  capitalizeFirstLetter,
  actions,
  useCasePrefixes
) =>
  function generateControllerCode(
    moduleName: string,
    prefix: string,
    action: string
  ): string {
    const formatedPrefix = convertToCamelCase(prefix);
    const camelCaseModuleName = convertToCamelCase(moduleName);

    const formatedModuleName =
      formatedPrefix.length > 0
        ? capitalizeFirstLetter(camelCaseModuleName)
        : camelCaseModuleName;

    const useCasePrefix = convertToCamelCase(useCasePrefixes[actions[action]]);

    const template = `
module.exports = (${useCasePrefix}${formatedModuleName}) =>
async function ${formatedPrefix}${formatedModuleName}(httpRequest) {

}`;

    return template;
  };
