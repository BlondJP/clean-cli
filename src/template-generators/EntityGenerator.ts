import {TemplateGenerator} from "./TemplateGenerator";
import {AvailableAction} from "../constants";
import {reverse as convertToCamelCase} from "../utils/caseUtils";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";

export class EntityGenerator implements TemplateGenerator {
    generate(moduleName: string, prefix: string, action: AvailableAction): string {
        const formattedPrefix = convertToCamelCase(prefix);
        const camelCaseModuleName = convertToCamelCase(moduleName);

        const formattedModuleName =
            formattedPrefix.length > 0
                ? capitalizeFirstLetter(camelCaseModuleName)
                : camelCaseModuleName;

        return `
module.exports = () =>
async function ${formattedPrefix}${formattedModuleName}(${camelCaseModuleName}Infos) {

}`;
    }
}