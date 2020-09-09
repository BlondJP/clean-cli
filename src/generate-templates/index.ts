// dependencies
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import { actions, useCasePrefixes } from "../prefixes";
const kebabCase = require("kebab-case");
console.log("kebabCase.reverse", kebabCase.reverse);

// factories
import makeGenerateControllerCode from "./generate-controller-code";

export const generateControllerCode = makeGenerateControllerCode(
  kebabCase.reverse,
  capitalizeFirstLetter,
  actions,
  useCasePrefixes
);
