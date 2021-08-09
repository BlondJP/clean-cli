// TODO find an abstration to IOC thoses funcs
import {generateController, generateUseCase, generateDataAccess, generateEntity} from "../generate-modules";
import {AvailableLayer} from "../constants";

export default class Broker {

    private async generateLayerModule(layer: string, action: string, data: string): Promise<string> {
        let message: string;
        if (layer === AvailableLayer.CONTROLLER) {
            message = await generateController(data, action);
        } else if (layer === AvailableLayer.USE_CASE) {
            message = await generateUseCase(data, action);
        } else if (layer === AvailableLayer.DATA_ACCESS) {
            message = await generateDataAccess(data, action);
        } else if (layer === AvailableLayer.ENTITY) {
            message = await generateEntity(data, action);
        } else if (layer === AvailableLayer.ALL_LAYERS) {
            message = await generateController(data, action) + "\n";
            message += await generateUseCase(data, action) + "\n";
            message += await generateDataAccess(data, action) + "\n";
            message += await generateEntity(data, action) + "\n";
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

        this.generateLayerModule(layer, action, data)
            .then((message) => console.log("file(s) generated here:\n", message))
            .catch((err) => console.error(err));
    }
}
