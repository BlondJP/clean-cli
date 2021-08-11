import Broker from "./Broker"
import currentDir from "../utils/get-current-dir";
import {FileGenerator} from "../utils/FileGenerator";
import {ControllerCreator, UseCaseCreator, EntityCreator, DataAccessCreator} from '../module-creators';
import {ControllerGenerator, UseCaseGenerator, EntityGenerator, DataAccessGenerator} from '../template-generators';
import {Logger} from "../logger/Logger";
import createLogger from "../logger/createLogger";

const sourceDir = `${currentDir()}/src`;

export default function createBroker(): Broker {
    const logger: Logger = createLogger();
    const controllerCreator = new ControllerCreator(new FileGenerator(), new ControllerGenerator(), sourceDir);
    const useCaseCreator = new UseCaseCreator(new FileGenerator(), new UseCaseGenerator(), sourceDir);
    const entityCreator = new EntityCreator(new FileGenerator(), new EntityGenerator(), sourceDir);
    const dataAccessCreator = new DataAccessCreator(new FileGenerator(), new DataAccessGenerator(), sourceDir);

    return new Broker(controllerCreator, useCaseCreator, dataAccessCreator, entityCreator, logger);
}
