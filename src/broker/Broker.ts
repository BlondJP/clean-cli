import {AvailableAction, AvailableLayer} from "../constants";
import {ControllerCreator, UseCaseCreator, EntityCreator, DataAccessCreator} from "../module-creators";

export default class Broker {

    constructor(
        private readonly controllerCreator: ControllerCreator,
        private readonly useCaseCreator: UseCaseCreator,
        private readonly dataAccessCreator: DataAccessCreator,
        private readonly entityCreator: EntityCreator,
        ) {}

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

    private async generateLayerModule(layer: string, action: AvailableAction, data: string): Promise<string> {
        let message: string;
        if (layer === AvailableLayer.CONTROLLER) {
            message = await this.controllerCreator.create(data, action);
        } else if (layer === AvailableLayer.USE_CASE) {
            message = await this.useCaseCreator.create(data, action);
        } else if (layer === AvailableLayer.DATA_ACCESS) {
            message = await this.dataAccessCreator.create(data, action);
        } else if (layer === AvailableLayer.ENTITY) {
            message = await this.entityCreator.create(data, action);
        } else if (layer === AvailableLayer.ALL_LAYERS) {
            message = await this.controllerCreator.create(data, action) + "\n";
            message += await this.useCaseCreator.create(data, action) + "\n";
            message += await this.dataAccessCreator.create(data, action) + "\n";
            message += await this.entityCreator.create(data, action) + "\n";
        } else {
            throw new Error(`The layer ${layer} is not valid`);
        }

        return message;
    }
}
