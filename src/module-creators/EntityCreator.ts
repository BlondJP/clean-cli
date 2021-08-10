import {ModuleCreator} from "./ModuleCreator";
import {AvailableAction, EntityPrefix} from "../constants";
import {FileGenerator} from "../utils/FileGenerator";
import {ControllerGenerator} from "../template-generators/ControllerGenerator";
import {checkFileExist, checkFolderExist} from "../utils";
import {EntityGenerator} from "../template-generators/EntityGenerator";

export class EntityCreator implements ModuleCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: EntityGenerator,
        private readonly sourceDir: string
    ) {}

    public async create(entityName: string, action: AvailableAction): Promise<string> {
        const filePrefix = EntityPrefix[action];
        if (!filePrefix) {
            console.error(`The action ${action} is not available generating entity`);
            return 'No file was generated for entity\n';
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
            console.error(`There already is a file ${filePath}`);
        }
    }

}