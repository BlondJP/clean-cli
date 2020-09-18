import faker from "faker";
import fs from "fs";
import makeGenerateUseCase from "../../src/generate-modules/generate-use-case";
import appRoot from "app-root-path";
import { checkFolderExist, createFile } from "../../src/utils";
import { useCasePrefixes, actions } from "../../src/prefixes";

describe("testing generate use case", () => {
  it("generate a usecase succesfuly full mock", async () => {
    // mocks
    const sourceDir = "/" + faker.hacker.noun() + "/" + faker.hacker.noun();
    const createFile = jest.fn();
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);
    const checkFolderExist = jest.fn(() => Promise.resolve(true));

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const action = Object.keys(actions)[actions.creating];

    // usage
    const generateUsecase = makeGenerateUseCase(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      useCasePrefixes,
      actions
    );

    const filePath = await generateUsecase(moduleName, action);
    expect(checkFolderExist).toHaveBeenCalledWith(`${sourceDir}/use-cases`);
    expect(createTemplate).toHaveBeenCalledWith(
      moduleName,
      useCasePrefixes[actions[action]],
      action
    );
    expect(createFile).toHaveBeenCalledWith(filePath, template);
  });

  it("generate a usecase succesfuly creating the file", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const action = Object.keys(actions)[actions.creating];

    // usage
    const generateUsecase = makeGenerateUseCase(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      useCasePrefixes,
      actions
    );

    const filePath = await generateUsecase(moduleName, action);

    expect(typeof filePath).toBe("string");

    const content = await fs.promises.readFile(filePath, "utf-8");
    expect(content).toBe(template);

    // clean tmp directory
    await fs.promises.unlink(filePath);
    await fs.promises.rmdir(sourceDir + "/use-cases");
  });
});
