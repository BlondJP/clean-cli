export type LogType = 'info' | 'error' | 'warn';

export interface Log {
    content: string;
    type: LogType;
}