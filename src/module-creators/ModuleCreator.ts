import {AvailableAction} from "../constants";

/**
 * Will create the entire module -> fileContent then creating it in the FS
 */
export interface ModuleCreator {
    create(entityName: string, action: AvailableAction): Promise<string>;
}