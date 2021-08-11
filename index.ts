#! /usr/bin/env node
import { Command } from "commander";
import createBroker from "./src/broker/createBroker";
import createLogger from "./src/logger/createLogger";

const program = new Command();
const logger = createLogger();

program.version("1.4.0");
program.parse(process.argv);

const [command, layer, action, data] = program.args;

if (!command || !layer || !action || !data) {
  logger.error("You must provide the 4 following args : [command] [layer] [action] [data]");
} else {
  const broker = createBroker();
  broker.broke(command, layer, action, data);
}
