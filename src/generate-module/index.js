//deps
const sourceDir = "/home/jp_blond/Projects/clean-cli/src";

// factories
import makeGenerateController from "./generate-controller";

// bateery included exports
export const generateController = makeGenerateController(sourceDir);
