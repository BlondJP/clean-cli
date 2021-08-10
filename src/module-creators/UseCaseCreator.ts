import {ModuleCreator} from "./ModuleCreator";
import {AvailableAction, ControllerPrefix, UseCasePrefix} from "../constants";
import {FileGenerator} from "../utils/FileGenerator";
import {checkFolderExist} from "../utils";
import {UseCaseGenerator} from "../template-generators/UseCaseGenerator";

export class UseCaseCreator implements ModuleCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: UseCaseGenerator,
        private readonly sourceDir: string
    ) {}
    public async create(entityName: string, action: AvailableAction): Promise<string> {
        const filePrefix: UseCasePrefix = UseCasePrefix[action];
        const fileName = `${filePrefix}-${entityName}.js`;

        const useCasesFolder = `${this.sourceDir}/use-cases`;
        await checkFolderExist(useCasesFolder);

        const filePath = `${useCasesFolder}/${fileName}`;
        const template: string = this.templateGenerator.generate(entityName, filePrefix, action);

        await this.fileGenerator.generate(filePath, template);

        return filePath;
    }
}