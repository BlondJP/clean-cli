import kebabCase from "kebab-case";

export default (dataAccessPrefixes, actions) =>
  function generateDataAccessCode(action) {
    const functionName = dataAccessPrefixes[actions[action]];
    const formatedFuncName = kebabCase.reverse(functionName);

    const template = `export default () => {
        async function ${formatedFuncName}() {

        }

        return Object.freeze({${formatedFuncName}})
    }`;

    return template;
  };
