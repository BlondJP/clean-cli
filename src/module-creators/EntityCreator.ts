import {ModuleCreator} from "./ModuleCreator";
import {AvailableAction, EntityPrefix} from "../constants";
import {FileGenerator} from "../utils/FileGenerator";
import {checkFileExist, checkFolderExist} from "../utils";
import {EntityGenerator} from "../template-generators";
import {Logger} from "../logger/Logger";

export class EntityCreator implements ModuleCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: EntityGenerator,
        private readonly sourceDir: string
    ) {}

    public async create(entityName: string, action: AvailableAction): Promise<string> {
        const filePrefix = EntityPrefix[action];
        if (!filePrefix) {
            throw new Error('No file was generated for entity');
        }
        const fileName = `${filePrefix}-${entityName}.js`;

        const entitiesFolder = `${this.sourceDir}/entities`;
        await checkFolderExist(entitiesFolder);
        const filePath = `${entitiesFolder}/${fileName}`;

        const exists = await checkFileExist(filePath);
        if (!exists) {
            const template = this.templateGenerator.generate(entityName, filePrefix, action);
            await this.fileGenerator.generate(filePath, template);
            return filePath;
        } else {
            throw new Error(`There already is an entity file ${filePath}`);
        }
    }
}