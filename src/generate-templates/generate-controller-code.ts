export default (
  convertToCamelCase,
  capitalizeFirstLetter,
  actions,
  useCasePrefixes
) =>
  function generateControllerCode(
    moduleName: string,
    prefix: string,
    action: string,
    ecmaScriptEnabled: boolean
  ): string {
    const formatedPrefix = convertToCamelCase(prefix);
    const camelCaseModuleName = convertToCamelCase(moduleName);

    const formatedModuleName =
      formatedPrefix.length > 0
        ? capitalizeFirstLetter(camelCaseModuleName)
        : camelCaseModuleName;

    const useCasePrefix = convertToCamelCase(useCasePrefixes[actions[action]]);

    let template: string;
    if (ecmaScriptEnabled) {
      template = `
      export default (${useCasePrefix}${formatedModuleName}) =>
      async function ${formatedPrefix}${formatedModuleName}(httpRequest) {
      
      }`;
    } else {
      template = `
      module.exports = (${useCasePrefix}${formatedModuleName}) =>
      async function ${formatedPrefix}${formatedModuleName}(httpRequest) {
      
      }`;
    }

    return template;
  };
