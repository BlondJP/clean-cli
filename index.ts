#! /usr/bin/env node
import { Command } from "commander";
import {
  generateController,
  generateUseCase,
  generateDataAccess,
  generateEntity,
} from "./src/generate-modules";

const program = new Command();

program.version("1.4.0");

program.option(
  "-e, --with-es-modules",
  "will produce modules respecting EcmaScript Standard"
);

program.parse(process.argv);

const [command, layer, action, data] = program.args;
console.log("received", { command, layer, action, data });

// options
const ecmaScriptEnabled: boolean = !!program.withEsModules;
console.log("ecmaScriptEnabled", ecmaScriptEnabled);

if (!command || !layer || !action || !data) {
  console.error(
    "You must provide the 4 following args : [command] [layer] [action] [data]"
  );
} else if (command !== "generate") {
  console.error("Only the command 'generate' is available in this version");
} else {
  if (layer === "controller") {
    generateController(data, action, ecmaScriptEnabled)
      .then((message) => console.log("file generated here", message))
      .catch((err) => console.error(err));
  } else if (layer === "useCase") {
    generateUseCase(data, action, ecmaScriptEnabled)
      .then((message) => console.log("file generated here", message))
      .catch((err) => console.error(err));
  } else if (layer === "dataAccess") {
    generateDataAccess(data, action, ecmaScriptEnabled)
      .then((message) => console.log("file generated here", message))
      .catch((err) => console.error(err));
  } else if (layer === "entity") {
    generateEntity(data, action, ecmaScriptEnabled)
      .then((message) => console.log("file generated here", message))
      .catch((err) => console.error(err));
  }
}
