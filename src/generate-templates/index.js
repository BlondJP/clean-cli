// dependencies
import kebabCase from "kebab-case";
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import { actions, useCasePrefixes, dataAccessPrefixes } from "../prefixes";

// factories
import makeGenerateControllerCode from "./generate-controller-code";
import makeGenerateUseCaseCode from "./generate-use-case-code";
import makeGenerateDataAccessCode from "./generate-data-access-code";

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

export const generateDataAccessCode = makeGenerateDataAccessCode(
  dataAccessPrefixes,
  actions
);
