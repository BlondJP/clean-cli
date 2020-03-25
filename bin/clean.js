#! /usr/bin/env node
require = require("esm")(module);
var cli = require("../src/cli");
console.log("cli", cli);
cli(process.argv);
