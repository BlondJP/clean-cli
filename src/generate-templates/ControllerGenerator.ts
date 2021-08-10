import {TemplateGenerator} from "./TemplateGenerator";
import {reverse as convertToCamelCase} from "../utils/caseUtils";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import {AvailableAction, UseCasePrefix} from "../constants";

export class ControllerGenerator implements TemplateGenerator {
    generate(moduleName: string, prefix: string, action: AvailableAction): string {
        console.log('prefix', prefix)
        const formattedPrefix = convertToCamelCase(prefix);
        console.log('formattedPrefix', formattedPrefix)
        const camelCaseModuleName = convertToCamelCase(moduleName);
        const formattedModuleName =
            formattedPrefix.length > 0
                ? capitalizeFirstLetter(camelCaseModuleName)
                : camelCaseModuleName;

        const rawUseCasePrefix : UseCasePrefix = UseCasePrefix[action];
        console.log('rawUseCasePrefix', rawUseCasePrefix)
        const useCasePrefix = convertToCamelCase(rawUseCasePrefix);
        console.log('useCasePrefix', useCasePrefix);

        return `
module.exports = (${useCasePrefix}${formattedModuleName}) =>
async function ${formattedPrefix}${formattedModuleName}(httpRequest) {

}`;
    }
}