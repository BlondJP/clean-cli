import {TemplateGenerator} from "./TemplateGenerator";
import {AvailableAction, DataAccessPrefix} from "../constants";
import {reverse as convertToCamelCase} from '../utils/caseUtils';

export class DataAccessGenerator implements TemplateGenerator {
    generate(entityName: string, prefix: string, action: AvailableAction): string {
        const functionName = DataAccessPrefix[action];
        const formattedFunctionName: string = convertToCamelCase(functionName);

        return `
module.exports = () => {
        
  async function ${formattedFunctionName}(${entityName}) {

  }

return Object.freeze({${formattedFunctionName}})

}`;
    }

}