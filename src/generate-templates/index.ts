// dependencies
import capitalizeFirstLetter from "../utils/capitalize-first-letter";
import { actions, useCasePrefixes, dataAccessPrefixes } from "../constants";
import {reverse} from '../utils/caseUtils';

// factories
import makeGenerateControllerCode from "./generate-controller-code";
import makeGenerateUseCaseCode from "./generate-use-case-code";
import makeGenerateDataAccess from "./generate-data-access-code";
import makeGenerateEntityCode from "./generate-entity-code";

export const generateControllerCode = makeGenerateControllerCode(
  reverse,
  capitalizeFirstLetter,
  actions,
  useCasePrefixes
);

export const generateUseCaseCode = makeGenerateUseCaseCode(
  reverse,
  capitalizeFirstLetter
);

export const generateDataAccessCode = makeGenerateDataAccess(
  reverse,
  dataAccessPrefixes,
  actions
);

export const generateEntityCode = makeGenerateEntityCode(
  reverse,
  capitalizeFirstLetter
);
