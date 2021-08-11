import {ModuleCreator} from "./ModuleCreator";
import {AvailableAction, UseCasePrefix} from "../constants";
import {FileGenerator} from "../utils/FileGenerator";
import {checkFileExist, checkFolderExist} from "../utils";
import {UseCaseGenerator} from "../template-generators";

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
        const exists = await checkFileExist(filePath);
        if (!exists) {
            const template: string = this.templateGenerator.generate(entityName, filePrefix, action);
            await this.fileGenerator.generate(filePath, template);
            return filePath;
        } else {
            throw new Error(`There already is a useCase file ${filePath}`);
        }
    }
}