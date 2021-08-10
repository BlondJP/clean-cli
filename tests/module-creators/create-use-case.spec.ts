import faker from "faker";
import {unlink, rmdir} from "fs/promises";
import appRoot from "app-root-path";
import {AvailableAction} from "../../src/constants";
import {UseCaseCreator} from "../../src/module-creators";
import {FileGenerator} from "../../src/utils/FileGenerator";
import {UseCaseGenerator} from "../../src/template-generators";

describe("testing generate use case", () => {
  it("generate a usecase succesfuly creating the file", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";
    const template = faker.random.words();
    const createTemplate = jest.fn(() => template);

    // params
    const entityName: string = faker.hacker.noun() + "-" + faker.hacker.noun();
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const useCaseCreator = new UseCaseCreator(new FileGenerator(), new UseCaseGenerator(), sourceDir);
    const filePath = await useCaseCreator.create(entityName, actionKey);

    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const useCase = func();
    console.log('useCase', useCase);
    expect(typeof useCase).toBe('function');

    // clean tmp directory
    await unlink(filePath);
    await rmdir(sourceDir + "/use-cases", {recursive: true});
  });
});
