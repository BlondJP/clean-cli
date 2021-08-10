import {TemplateGenerator} from "./TemplateGenerator";
import {reverse as convertToCamelCase} from "../utils/caseUtils";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import {AvailableAction, UseCasePrefix} from "../constants";

export class ControllerGenerator implements TemplateGenerator {
    generate(moduleName: string, prefix: string, action: AvailableAction): string {
        const formattedPrefix = convertToCamelCase(prefix);
        const camelCaseModuleName = convertToCamelCase(moduleName);
        const formattedModuleName =
            formattedPrefix.length > 0
                ? capitalizeFirstLetter(camelCaseModuleName)
                : camelCaseModuleName;

        const rawUseCasePrefix : UseCasePrefix = UseCasePrefix[action];
        const useCasePrefix = convertToCamelCase(rawUseCasePrefix);

        return `
module.exports = (${useCasePrefix}${formattedModuleName}) =>
async function ${formattedPrefix}${formattedModuleName}(httpRequest) {

}`;
    }
}