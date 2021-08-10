import {FileGenerator} from "../utils/FileGenerator";
import {TemplateGenerator} from "../generate-templates/TemplateGenerator";
import {AvailableAction, ControllerPrefix} from "../constants";
import {checkFolderExist} from "../utils";

export class ControllerCreator {
    constructor(
        private readonly fileGenerator: FileGenerator,
        private readonly templateGenerator: TemplateGenerator,
        private readonly sourceDir: string
    ) {}

    public async create(entityName: string, action: AvailableAction) {
        const filePrefix: ControllerPrefix = ControllerPrefix[action];
        console.log('filePrefix', filePrefix);
        const fileName: string = `${filePrefix}-${entityName}.js`;

        const controllersFolder: string = `${this.sourceDir}/controllers`;
        await checkFolderExist(controllersFolder);
        const filePath: string = `${controllersFolder}/${fileName}`;
        console.log('ALIVE')
        const template: string = this.templateGenerator.generate(entityName, filePrefix, action);
        console.log('ALIVE2')

        await this.fileGenerator.generate(filePath, template);
        console.log('ALIVE3')

        return filePath;
    }
}