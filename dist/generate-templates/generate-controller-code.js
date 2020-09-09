"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (convertToCamelCase, capitalizeFirstLetter, actions, useCasePrefixes) => function generateControllerCode(moduleName, prefix, action) {
    const formatedPrefix = convertToCamelCase(prefix);
    const camelCaseModuleName = convertToCamelCase(moduleName);
    const formatedModuleName = formatedPrefix.length > 0
        ? capitalizeFirstLetter(camelCaseModuleName)
        : camelCaseModuleName;
    const useCasePrefix = convertToCamelCase(useCasePrefixes[actions[action]]);
    const template = `export default (${useCasePrefix}${formatedModuleName}) => async function ${formatedPrefix}${formatedModuleName}(httpRequest) {
    }`;
    return template;
};
//# sourceMappingURL=generate-controller-code.js.map