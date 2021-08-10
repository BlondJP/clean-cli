// TODO find an abstration to IOC thoses funcs
import {generateController, generateUseCase, generateDataAccess, generateEntity} from "../generate-modules";
import {AvailableAction, AvailableLayer} from "../constants";
import {ControllerCreator} from "../generate-modules/ControllerCreator";

export default class Broker {

    constructor(private readonly controllerCreator: ControllerCreator) {
    }

    private async generateLayerModule(layer: string, action: AvailableAction, data: string): Promise<string> {
        let message: string;
        if (layer === AvailableLayer.CONTROLLER) {
            console.log('entering controller path')
            message = await this.controllerCreator.create(data, action);
        } else if (layer === AvailableLayer.USE_CASE) {
            message = await generateUseCase(data, action as unknown as string);
        } else if (layer === AvailableLayer.DATA_ACCESS) {
            message = await generateDataAccess(data, action as unknown as string);
        } else if (layer === AvailableLayer.ENTITY) {
            message = await generateEntity(data, action as unknown as string);
        } else if (layer === AvailableLayer.ALL_LAYERS) {
            message = await this.controllerCreator.create(data, action) + "\n";
            message += await generateUseCase(data, action as unknown as string) + "\n";
            message += await generateDataAccess(data, action as unknown as string) + "\n";
            message += await generateEntity(data, action as unknown as string) + "\n";
        } else {
            throw new Error(`The layer ${layer} is not valid`);
        }

        return message;
    }

    public broke(command: string, layer: string, action: string, data: string): void {
        if (command !== "generate") {
            console.error("Only the command 'generate' is available in this version");
            return;
        }

        if (!Object.values(AvailableAction).includes(action as unknown as AvailableAction)) {
            console.error(`Error action ${action} is not Available`);
            return;
        }

        const availableAction: AvailableAction = AvailableAction[action];
        this.generateLayerModule(layer, availableAction, data)
            .then((message) => console.log("file(s) generated here:\n", message))
            .catch((err) => console.error(err));
    }
}
