#! /usr/bin/env node
require = require("esm")(module);
var cli = require("../src/cli");
cli(process.argv);
