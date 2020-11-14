export default (
  convertToCamelCase: (str: string) => string,
  capitalizeFirstLetter: (str: string) => string
) =>
  function generateEntityCode(
    moduleName: string,
    prefix: string,
    ecmaScriptEnabled: boolean
  ) {
    const formatedPrefix = convertToCamelCase(prefix);
    const camelCaseModuleName = convertToCamelCase(moduleName);

    const formatedModuleName =
      formatedPrefix.length > 0
        ? capitalizeFirstLetter(camelCaseModuleName)
        : camelCaseModuleName;

    let template: string;
    if (ecmaScriptEnabled) {
      template = `
export default () =>
async function ${formatedPrefix}${formatedModuleName}(${camelCaseModuleName}Infos) {

}`;
    } else {
      template = `
module.exports = () =>
async function ${formatedPrefix}${formatedModuleName}(${camelCaseModuleName}Infos) {

}`;
    }

    return template;
  };
