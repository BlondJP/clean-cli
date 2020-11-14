#! /usr/bin/env node
import { Command } from "commander";
import createBroker from "./src/broker/createBroker";

const program = new Command();

program.version("1.4.0");
program.parse(process.argv);

const [command, layer, action, data] = program.args;
console.log("received", {command, layer, action, data});

if (!command || !layer || !action || !data) {
  console.error("You must provide the 4 following args : [command] [layer] [action] [data]");
} else {
  const broker = createBroker();
  broker.broke(command, layer, action, data);
}
