import { generateUseCase } from "../generate-modules";

export default (
  { generateController },
  { actions, controllerPrefixes, useCasePrefixes },
  kebabCase
) =>
  async function cli([nodePath, rootFilePath, command, action, moduleName]) {
    if (!command) {
      throw new Error("Error: you must provide a command ex: generate");
    }

    const availableActions = Object.keys(actions);
    if (!action || !availableActions.includes(action)) {
      throw new Error(
        `Error: you must provide one of the several actions ${availableActions.toString()}`
      );
    }

    if (!moduleName) {
      throw new Error("Error: a module name must be provided as argument.");
    }

    const isModuleKebabCase = moduleName === kebabCase(moduleName);
    if (!isModuleKebabCase) {
      throw new Error("Error: the module name must be provided in kebab-case.");
    }

    try {
      generateController(moduleName, action).then((path) => {
        console.log(`controller has been created here ${path}`);
      });
      generateUseCase(moduleName, action).then((path) => {
        console.log(`use case has been created here ${path}`);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
