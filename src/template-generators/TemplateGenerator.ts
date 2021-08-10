import {AvailableAction} from "../constants";

export interface TemplateGenerator {
    generate(moduleName: string, prefix: string, action: AvailableAction): string;
}