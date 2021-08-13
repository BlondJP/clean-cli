import {TemplateGenerator} from "./TemplateGenerator";
import {AvailableAction, EntityPrefix} from "../constants";
import {reverse as convertToCamelCase} from "../utils/caseUtils";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";

export class UseCaseGenerator implements TemplateGenerator {
    generate(moduleName: string, prefix: string, action: AvailableAction): string {
        const formattedPrefix = convertToCamelCase(prefix);
        const camelCaseModuleName = convertToCamelCase(moduleName);

        const formattedModuleName =
            formattedPrefix.length > 0
                ? capitalizeFirstLetter(camelCaseModuleName)
                : camelCaseModuleName;

        const entityPrefix = EntityPrefix[action];
        const injectedEntityName = `${entityPrefix}${formattedModuleName}`;

        return `
module.exports = (${injectedEntityName}, ${camelCaseModuleName}Db) =>
async function ${formattedPrefix}${formattedModuleName}(${camelCaseModuleName}Info) {

}`
    }
}