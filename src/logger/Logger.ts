import {Log} from "./Log";

export interface Logger {
    info(str: string): void;
    warn(str: string): void;
    error(str: string): void;
    handle(logStack: Array<Log>): void;
}
