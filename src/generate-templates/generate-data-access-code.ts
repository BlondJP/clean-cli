export default (
  convertToCamelCase: (str: string) => string,
  dataAccessPrefixes: string[],
  actions: Object
) =>
  function generateDataAccessCode(
    action: string,
    ecmaScriptEnabled: boolean
  ): string {
    const functionName: string = dataAccessPrefixes[actions[action]];
    const formatedFuncName: string = convertToCamelCase(functionName);

    let template: string;
    if (ecmaScriptEnabled) {
      template = `
      export default () => {
              
        async function ${formatedFuncName}() {
      
        }
      
      return Object.freeze({${formatedFuncName}})
      
      }`;
    } else {
      template = `
      module.exports = () => {
              
        async function ${formatedFuncName}() {
      
        }
      
      return Object.freeze({${formatedFuncName}})
      
      }`;
    }

    return template;
  };
