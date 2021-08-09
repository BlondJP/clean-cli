// dependencies
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import { actions, useCasePrefixes, dataAccessPrefixes } from "../constants";
import kebabCase = require("kebab-case");

// factories
import makeGenerateControllerCode from "./generate-controller-code";
import makeGenerateUseCaseCode from "./generate-use-case-code";
import makeGenerateDataAccess from "./generate-data-access-code";
import makeGenerateEntityCode from "./generate-entity-code";

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

export const generateDataAccessCode = makeGenerateDataAccess(
  kebabCase.reverse,
  dataAccessPrefixes,
  actions
);

export const generateEntityCode = makeGenerateEntityCode(
  kebabCase.reverse,
  capitalizeFirstLetter
);
