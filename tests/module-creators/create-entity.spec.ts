import faker from "faker";
import {unlink, rmdir} from "fs/promises";
import {ControllerCreator, EntityCreator} from "../../src/module-creators";
import appRoot from "app-root-path";
import {FileGenerator} from "../../src/utils/FileGenerator";
import {ControllerGenerator, EntityGenerator} from "../../src/template-generators";
import {AvailableAction} from "../../src/constants";

describe("testing generate controller", () => {
  it("generate a controller successfully creating the file", async () => {
    // deps
    const rootDir = appRoot.path;
    const sourceDir = rootDir + "/tmp";

    // params
    const entityName: string = faker.hacker.noun() + "-" + faker.hacker.noun();
    const actionKey: AvailableAction = AvailableAction['creating'];

    // usage
    const entityCreator = new EntityCreator(new FileGenerator(), new EntityGenerator(), sourceDir);
    const filePath = await entityCreator.create(entityName, actionKey);

    // checks
    expect(typeof filePath).toBe("string");

    const func = require(filePath);
    console.log('func', func);
    expect(typeof func).toBe('function');

    const entity = func();
    console.log('entity', entity);
    expect(typeof entity).toBe('function');

    // clean tmp directory
    await unlink(filePath);
    await rmdir(sourceDir + "/controllers", {recursive: true});
  });
});
