// dependencies
import kebabCase from "kebab-case";
import { generateController, generateUseCase } from "../generate-modules";
import { actions, controllerPrefixes, useCasePrefixes } from "../prefixes";

// factories
import makeCli from "./cli";

const cli = makeCli(
  { generateController, generateUseCase },
  { actions, controllerPrefixes, useCasePrefixes },
  kebabCase
);
module.exports = cli;
