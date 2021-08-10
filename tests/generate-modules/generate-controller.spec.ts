import faker from "faker";
import fs from "fs";
import makeGenerateController from "../../src/module-generators/generate-controller";
import appRoot from "app-root-path";
import { checkFolderExist, createFile } from "../../src/utils";
import { controllerPrefixes, actions } from "../../src/prefixes";

describe("testing generate controller", () => {
  it("generate a controller succesfuly full mock", async () => {
    // mocks
    const sourceDir: string =
      "/" + faker.hacker.noun() + "/" + faker.hacker.noun();
    const createFile = jest.fn();
    const template: string = faker.random.words();
    const createTemplate = jest.fn(() => template);
    const checkFolderExist = jest.fn(() => Promise.resolve(true));

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const prefix = Object.keys(actions)[actions.creating];

    // usage
    const generateController = makeGenerateController(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      controllerPrefixes,
      actions
    );
    const filePath = await generateController(moduleName, prefix);

    expect(typeof filePath).toBe("string");
    expect(checkFolderExist).toHaveBeenCalledWith(`${sourceDir}/controllers`);
    expect(createTemplate).toHaveBeenCalledWith(
      moduleName,
      controllerPrefixes[actions.creating],
      prefix
    );
    expect(createFile).toHaveBeenCalledWith(filePath, template);
  });

  it("generate a controller succesfuly creating the file", async () => {
    // mocks
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const prefix = faker.random.word();

    // usage
    const generateController = makeGenerateController(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist,
      controllerPrefixes,
      actions
    );
    const filePath = await generateController(moduleName, prefix);
    expect(typeof filePath).toBe("string");

    const content = await fs.promises.readFile(filePath, "utf-8");
    expect(content).toBe(template);

    // clean tmp directory
    await fs.promises.unlink(filePath);
    await fs.promises.rmdir(sourceDir + "/controllers");
  });
});
