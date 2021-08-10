import Broker from "./Broker"
import {ControllerCreator} from "../generate-modules/ControllerCreator";
import {FileGenerator} from "../utils/FileGenerator";
import {ControllerGenerator} from "../generate-templates/ControllerGenerator";

import currentDir from "../../get-current-dir";
const sourceDir: string = `${currentDir()}/src`;

export default function createBroker(): Broker {
    const controllerCreator = new ControllerCreator(new FileGenerator(), new ControllerGenerator(), sourceDir);
    return new Broker(controllerCreator);
}
