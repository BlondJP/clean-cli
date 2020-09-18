// dependencies
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import { actions, useCasePrefixes } from "../prefixes";
import kebabCase = require("kebab-case");

// factories
import makeGenerateControllerCode from "./generate-controller-code";
import makeGenerateUseCaseCode from "./generate-use-case-code";

export const generateControllerCode = makeGenerateControllerCode(
  kebabCase.reverse,
  capitalizeFirstLetter,
  actions,
  useCasePrefixes
);

export const generateUseCaseCode = makeGenerateUseCaseCode(
  kebabCase.reverse,
  capitalizeFirstLetter
);
