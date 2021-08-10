import faker from "faker";
import fs from "fs";
import makeGenerateDataAccess from "../../src/module-generators/generate-data-access";
import appRoot from "app-root-path";
import { checkFolderExist, createFile, checkFileExist } from "../../src/utils";
import { dataAccessPrefixes, actions } from "../../src/prefixes";

describe("testing dataAccess", () => {
  it("generate a dataAccess succesfuly full mock", async () => {
    // mocks
    const sourceDir = "/" + faker.hacker.noun() + "/" + faker.hacker.noun();
    const createFile = jest.fn();
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);
    const checkFolderExist = jest.fn(() => Promise.resolve(true));
    const checkFileExist = jest.fn(() => Promise.resolve(false));

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const action = Object.keys(actions)[actions.creating];

    // usage
    const generateDataAccess = makeGenerateDataAccess(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      checkFileExist
    );

    const filePath = await generateDataAccess(moduleName, action);

    expect(checkFolderExist).toHaveBeenCalledWith(`${sourceDir}/data-access`);
    expect(createTemplate).toHaveBeenCalledWith(
      action
    );
    expect(createFile).toHaveBeenCalledWith(filePath, template);
  });

  it("generate a dataAccess generating a file", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const action = Object.keys(actions)[actions.creating];

    // usage
    const generateDataAccess = makeGenerateDataAccess(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      checkFileExist
    );

    const filePath = await generateDataAccess(moduleName, action);
    
    expect(createTemplate).toHaveBeenCalledWith(
      action
    );

    expect(typeof filePath).toBe("string");

    const content = await fs.promises.readFile(filePath, "utf-8");
    expect(content).toBe(template);

    // clean tmp directory
    await fs.promises.unlink(filePath);
    await fs.promises.rmdir(sourceDir + "/data-access");
});

});