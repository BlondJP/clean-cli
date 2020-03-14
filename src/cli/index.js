// dependencies
import kebabCase from "kebab-case";
import { generateController } from "../generate-module";
import { actions, controllerPrefixes } from "../prefixes";

// factories
import makeCli from "./cli";

const cli = makeCli(
  { generateController },
  { actions, controllerPrefixes },
  kebabCase
);
module.exports = cli;
