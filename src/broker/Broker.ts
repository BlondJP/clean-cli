import {AvailableAction, AvailableLayer} from "../constants";
import {ControllerCreator, UseCaseCreator, EntityCreator, DataAccessCreator} from "../module-creators";
import {Logger} from "../logger/Logger";
import {Log} from "../logger/Log";

export default class Broker {
    constructor(
        private readonly controllerCreator: ControllerCreator,
        private readonly useCaseCreator: UseCaseCreator,
        private readonly dataAccessCreator: DataAccessCreator,
        private readonly entityCreator: EntityCreator,
        private readonly logger: Logger,
        ) {}

    public async broke(command: string, layer: string, action: string, data: string): Promise<void> {
        if (command !== "generate") {
            this.logger.error('Only the command \'generate\' is available in this version');
            return;
        }

        if (!Object.values(AvailableAction).includes(action as unknown as AvailableAction)) {
            this.logger.error(`Error action ${action} is not Available`);
            return;
        }

        const availableAction: AvailableAction = AvailableAction[action];
        try {
            const logs = await this.generateModuleLayer(layer, availableAction, data);
            const header = 'Congratulations, you just generated the following results:';
            this.logger.info(header);
            this.logger.handle(logs);
        } catch (err) {
            this.logger.error(err.message);
        }
    }

    private async generateModuleLayer(layer: string, action: AvailableAction, data: string): Promise<Array<Log>> {
        const logs: Array<Log> = [];

        if (layer === AvailableLayer.CONTROLLER) {
            logs.push(await this.handleControllerCreating(data, action));
        } else if (layer === AvailableLayer.USE_CASE) {
            logs.push(await this.handleUseCaseCreating(data, action));
        } else if (layer === AvailableLayer.DATA_ACCESS) {
            logs.push(await this.handleDataAccessCreating(data, action));
        } else if (layer === AvailableLayer.ENTITY) {
            logs.push(await this.handleEntityCreating(data, action));
        } else if (layer === AvailableLayer.ALL_LAYERS) {
            logs.push(await this.handleControllerCreating(data, action));
            logs.push(await this.handleUseCaseCreating(data, action));
            logs.push(await this.handleDataAccessCreating(data, action));
            logs.push(await this.handleEntityCreating(data, action));
        } else {
            throw new Error(`The layer ${layer} is not valid`);
        }

        return logs;
    }

    // Wrap Creators execution generating logs
    private async handleControllerCreating(data: string, action: AvailableAction): Promise<Log> {
        try {
            const filePath = await this.controllerCreator.create(data, action);
            return {content: `The following file has been created ${filePath}`, type: "info"};
        } catch(err) {
            return {content: err.message, type: "error"};
        }
    }
    private async handleUseCaseCreating(data: string, action: AvailableAction): Promise<Log> {
        try {
            const filePath = await this.useCaseCreator.create(data, action);
            return {content: `The following file has been created ${filePath}`, type: "info"};
        } catch(err) {
            return {content: err.message, type: "error"};
        }
    }
    private async handleDataAccessCreating(data: string, action: AvailableAction): Promise<Log> {
        try {
            const filePath = await this.dataAccessCreator.create(data, action);
            return {content: `The following file has been created ${filePath}`, type: "info"};
        } catch(err) {
            return {content: err.message, type: "error"};
        }
    }
    private async handleEntityCreating(data: string, action: AvailableAction): Promise<Log> {
        try {
            const filePath = await this.entityCreator.create(data, action);
            return {content: `The following file has been created ${filePath}`, type: "info"};
        } catch(err) {
            return {content: err.message, type: "error"};
        }
    }
}
