import {FileGenerator} from "../utils/FileGenerator";
import {AvailableAction, ControllerPrefix} from "../constants";
import {checkFolderExist} from "../utils";
import {ModuleCreator} from "./ModuleCreator";
import {ControllerGenerator} from "../template-generators/ControllerGenerator";

export class ControllerCreator implements ModuleCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: ControllerGenerator,
        private readonly sourceDir: string
    ) {}

    public async create(entityName: string, action: AvailableAction): Promise<string> {
        const filePrefix: ControllerPrefix = ControllerPrefix[action];
        const fileName: string = `${filePrefix}-${entityName}.js`;

        const controllersFolder: string = `${this.sourceDir}/controllers`;
        await checkFolderExist(controllersFolder);
        const filePath: string = `${controllersFolder}/${fileName}`;
        const template: string = this.templateGenerator.generate(entityName, filePrefix, action);

        await this.fileGenerator.generate(filePath, template);

        return filePath;
    }
}