export const controllerPrefixes = [
  "create",
  "get-one",
  "get-all",
  "update",
  "delete",
];

export const useCasePrefixes = [
  "add",
  "find-one",
  "find-all",
  "edit",
  "remove",
];

// to specify
export const entityPrefixes = ["build", null, null, "update", null];

export const dataAccessPrefixes = [
  "insert",
  "find-one", // maybe "select" to respect SQL vocabulary
  "find-all",
  "update",
  "remove",
];

export const actions = {
  creating: 0,
  gettingOne: 1,
  gettingAll: 2,
  updating: 3,
  removing: 4,
};

export enum AvailableAction {
  CREATING = 'creating' as any,
  GETTING_ONE = 'gettingOne' as any,
  GETTING_ALL = 'gettingAll' as any,
  UPDATING = 'updating' as any,
  REMOVING = 'removing' as any,
}

export enum ControllerPrefix {
  CREATING = 'create',
  GETTING_ONE = "get-one",
  GETTING_ALL = "find-all",
  UPDATING = "update",
  REMOVING = "delete",
};

export enum UseCasePrefix {
  CREATING = 'add',
  GETTING_ONE = "find-one",
  GETTING_ALL = "get-all",
  UPDATING = "edit",
  REMOVING = "remove",
};

export enum AvailableLayer {
  CONTROLLER = 'controller',
  USE_CASE = 'useCase',
  DATA_ACCESS = 'dataAccess',
  ENTITY = 'entity',
  ALL_LAYERS = 'allLayers',
}