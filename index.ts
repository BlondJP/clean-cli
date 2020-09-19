#! /usr/bin/env node
import { Command } from "commander";
import {
  generateController,
  generateUseCase,
  generateDataAccess,
} from "./src/generate-modules";

const program = new Command();
program.version("1.1.0");
program
  .option("-g --file-type <fileType>", "type of the file we will generate")
  .option("-e --entity-name <entityName>", "name of the entity we will server")
  .option("-a --action-type <actionType>", "action the controller will do");
program.parse(process.argv);

const { fileType, entityName, actionType } = program;
console.log({ fileType, entityName, actionType });

if (fileType === "controller") {
  generateController(entityName, actionType)
    .then((message) => console.log(message))
    .catch((err) => console.error(err));
} else if (fileType === "useCase") {
  generateUseCase(entityName, actionType)
    .then((message) => console.log(message))
    .catch((err) => console.error(err));
} else if (fileType === "dataAccess") {
  generateDataAccess(entityName, actionType)
    .then((message) => console.log(message))
    .catch((err) => console.error(err));
}
