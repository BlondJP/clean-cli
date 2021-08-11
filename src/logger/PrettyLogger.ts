import {Logger} from "./Logger";
import {blue, red, yellow, green} from 'chalk';
import {Log} from "./Log";

export class PrettyLogger implements Logger {
    error(str: string): void {
        const prettyLog = red(str);
        console.log(prettyLog);
    }

    info(str: string): void {
        const prettyLog = green(str);
        console.log(prettyLog);
    }

    warn(str: string): void {
        const prettyLog = yellow(str);
        console.log(prettyLog);
    }

    handle(logs: Array<Log>): void {
        logs.forEach(log => {
            if (log.type === 'info') this.info(log.content);
            else if (log.type === 'error') this.error(log.content);
            else if (log.type === 'warn') this.warn(log.content);
        });
    }
}
