import {ModuleCreator} from "./ModuleCreator";
import {AvailableAction} from "../constants";
import {checkFileExist, checkFolderExist} from "../utils";
import {FileGenerator} from "../utils/FileGenerator";
import {ControllerGenerator} from "../template-generators";

export class DataAccessCreator implements ModuleCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: ControllerGenerator,
        private readonly sourceDir: string
    ) {}

    public async create(entityName: string, action: AvailableAction): Promise<string> {
        const fileName = `${entityName}-db.js`;

        const dataAccessFolder = `${this.sourceDir}/data-access`;
        await checkFolderExist(dataAccessFolder);
        const filePath = `${dataAccessFolder}/${fileName}`;

        const exists = await checkFileExist(filePath);
        if (!exists) {
            const template = this.templateGenerator.generate(entityName, '', action);
            await this.fileGenerator.generate(filePath, template);

            return filePath;
        } else {
            return `There already is a file ${filePath}`;
        }
    }
}