import faker from "faker";
import {unlink, rmdir} from "fs/promises";
import appRoot from "app-root-path";
import {DataAccessCreator} from "../../src/module-creators";
import {FileGenerator} from "../../src/utils/FileGenerator";
import {DataAccessGenerator} from "../../src/template-generators";
import {AvailableAction} from "../../src/constants";
import {createRandomEntityName} from "./createRandomEntityName";

describe("testing dataAccess", () => {
  it("create a dataAccess generating a file", async () => {
    // mocks
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";

    // params
    const entityName = createRandomEntityName();
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const dataAccessCreator = new DataAccessCreator(new FileGenerator(), new DataAccessGenerator(), sourceDir);
    const filePath = await dataAccessCreator.create(entityName, actionKey);
    // checks
    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const dataAccess = func();
    console.log('dataAccess', dataAccess);
    expect(typeof dataAccess).toBe('object');

    // clean tmp directory
    await unlink(filePath);
    await rmdir(sourceDir + "/data-access", {recursive: true});
  });

  it("generate a second dataAccess with same file name should throw error", async () => {
    // mocks
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";

    // params
    const entityName = createRandomEntityName();
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const dataAccessCreator = new DataAccessCreator(new FileGenerator(), new DataAccessGenerator(), sourceDir);
    const filePath = await dataAccessCreator.create(entityName, actionKey);

    // checks
    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const dataAccess = func();
    console.log('dataAccess', dataAccess);
    expect(typeof dataAccess).toBe('object');

    const exec = () => dataAccessCreator.create(entityName, actionKey);
    await expect(exec).rejects.toThrowError(`There already is a dataAccess file ${filePath}`);

    // clean tmp directory
    await unlink(filePath);
    await rmdir(sourceDir + "/data-access", {recursive: true});
  });
});
