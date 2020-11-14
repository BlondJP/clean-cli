import {availableLayers} from "../constants"
import Broker from "./Broker"

export default function createBroker(): Broker {
    return new Broker(availableLayers);
}
