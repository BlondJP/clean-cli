// TODO find an abstration to IOC thoses funcs
import {generateController, generateUseCase, generateDataAccess, generateEntity} from "../generate-modules";

export default class Broker {
    private layers : Array<string>;

    constructor(layers: Array<string>) {
        this.layers = layers;
    }

    private async generateLayerModule(layer: string, action: string, data: string): Promise<string> {
        const [controllerLayer, useCaseLayer, dataAccessLayer, entityLayer, allLayers] = this.layers;

        let message: string;
        if (layer === controllerLayer) {
            message = await generateController(data, action);
        } else if (layer === useCaseLayer) {
            message = await generateUseCase(data, action);
        } else if (layer === dataAccessLayer) {
            message = await generateDataAccess(data, action);
        } else if (layer === entityLayer) {
            message = await generateEntity(data, action);
        } else if (layer === allLayers) {
            message += await generateController(data, action) + "\n";
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

        if (layer)

        this.generateLayerModule(layer, action, data)
            .then((message) => console.log("file generated here", message))
            .catch((err) => console.error(err));
    }
}
