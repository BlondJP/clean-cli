#! /usr/bin/env node
const { Command } = require("commander");
const program = new Command();
program.version("0.0.1");

program
  .option("-g --generate-file <fileType>", "type of the file we will generate")
  .option("-e --entity-name <entityName>", "name of the entity we will server");

program.parse(process.argv);

const { generateFile: fileType, entityName } = program;
console.log({ fileType, entityName });

const fs = require("fs");
const getCurrentDir = require("./get-current-dir");
const currentDir = getCurrentDir();
const filePath = `${currentDir}/generated-by-clean-cli-${fileType}-${entityName}.js`;

fs.promises
  .writeFile(filePath, "lorem ipsum", (err, f) => {
    if (err) {
      return Promise.reject(err);
    }
    console.log("filePath", filePath);
  })
  .catch((err) => console.log(err));
