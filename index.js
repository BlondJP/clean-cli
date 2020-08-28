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

// type : node index.js -g controller -e user

const path = require("path");
const rootPath = path.dirname(require.main.filename);
console.log("rootPath", rootPath);

const filePath = `${rootPath}/generated-by-clean-cli-${fileType}-${entityName}.js`;
console.log("filePath", filePath);

const fs = require("fs");

fs.promises
  .writeFile(filePath, "lorem upsum", (err) => {
    if (err) {
      Promise.reject(err);
    }
    Promise.resolve(filePath);
  })
  .then((file) => console.log(`${file} has been created.`));
