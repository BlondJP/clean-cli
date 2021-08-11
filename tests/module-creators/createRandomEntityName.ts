import faker from "faker";

export function createRandomEntityName(): string {
    const entityWithSpaces = faker.hacker.noun() + "-" + faker.hacker.noun();
    return entityWithSpaces.replace(' ', '-');
}