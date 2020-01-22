import makeGenerateControllerCode from "./generate-controller-code";
import kebabCase from "kebab-case";

export const generateControllerCode = makeGenerateControllerCode(
  kebabCase.reverse
);
