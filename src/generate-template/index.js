import makeGenerateControllerCode from "./generate-controller-code";
import kebabCase from "kebab-case";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";

export const generateControllerCode = makeGenerateControllerCode({
  convertToCamelCase: kebabCase.reverse,
  capitalizeFirstLetter
});
