import {Logger} from "./Logger";
import {PrettyLogger} from "./PrettyLogger";

export default function createLogger(): Logger {
    return new PrettyLogger();
}