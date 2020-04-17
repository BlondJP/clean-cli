import faker from "faker";
import makeGenerateController from "../../src/generate-module/generate-controller";

describe("testing generate controller", () => {
  it("generate a controller succesfuly full mock", async () => {
    // mocks
    const sourceDir = "/" + faker.hacker.noun() + "/" + faker.hacker.noun();
    const createFile = jest.fn();
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);
    const checkFolderExist = jest.fn(() => Promise.resolve(true));

    // params
    const moduleName = faker.hacker.noun() + "-" + faker.hacker.noun();
    const prefix = faker.random.word();

    // usage
    const generateController = makeGenerateController(
      sourceDir,
      createFile,
      createTemplate,
      checkFolderExist
    );
    const filePath = await generateController(moduleName, prefix);

    expect(typeof filePath).toBe("string");
    expect(checkFolderExist).toHaveBeenCalledWith(`${sourceDir}/controllers`);
    expect(createTemplate).toHaveBeenCalledWith(moduleName, prefix);
    expect(createFile).toHaveBeenCalledWith(filePath, template);
  });
});