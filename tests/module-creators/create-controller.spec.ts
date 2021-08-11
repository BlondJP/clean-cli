import {unlink, rmdir} from "fs/promises";
import {ControllerCreator} from "../../src/module-creators";
import appRoot from "app-root-path";
import {FileGenerator} from "../../src/utils/FileGenerator";
import {ControllerGenerator} from "../../src/template-generators";
import {AvailableAction} from "../../src/constants";
import {createRandomEntityName} from "./createRandomEntityName";

describe("testing generate controller", () => {
  it("generate a controller successfully creating the file", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";

    // params
    const entityName = createRandomEntityName();
    console.log('entityName', entityName);
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const controllerCreator = new ControllerCreator(new FileGenerator(), new ControllerGenerator(), sourceDir);
    const filePath = await controllerCreator.create(entityName, actionKey);

    // checks
    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const controller = func();
    // console.log('controller', controller);
    expect(typeof controller).toBe('function');

    // clean tmp directory
     await unlink(filePath);
     await rmdir(sourceDir + "/controllers", {recursive: true});
  });

  it("generate a second controller with same file name should throw error", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";

    // params
    const entityName = createRandomEntityName();
    console.log('entityName', entityName);
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const controllerCreator = new ControllerCreator(new FileGenerator(), new ControllerGenerator(), sourceDir);
    const filePath = await controllerCreator.create(entityName, actionKey);

    // checks
    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const controller = func();
    console.log('controller', controller);
    expect(typeof controller).toBe('function');

    // should trigger an error
    const exec = () => controllerCreator.create(entityName, actionKey);
    await expect(exec).rejects.toThrowError(`There already is a controller file ${filePath}`);

    // clean tmp directory
    await unlink(filePath);
    await rmdir(sourceDir + "/controllers", {recursive: true});
  });
});
