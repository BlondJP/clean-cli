export default (
  convertToCamelCase: (str: string) => string,
  dataAccessPrefixes: string[],
  actions: Object
) =>
  function generateDataAccessCode(action: string): string {
    const functionName: string = dataAccessPrefixes[actions[action]];
    const formatedFuncName: string = convertToCamelCase(functionName);

    const template = `
module.exports = () => {
        
  async function ${formatedFuncName}() {

  }

return Object.freeze({${formatedFuncName}})

}`;

    return template;
  };
