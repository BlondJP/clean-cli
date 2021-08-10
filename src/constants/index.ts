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
}

export enum UseCasePrefix {
  CREATING = 'add',
  GETTING_ONE = "find-one",
  GETTING_ALL = "get-all",
  UPDATING = "edit",
  REMOVING = "remove",
}

export enum DataAccessPrefix {
  CREATING = 'insert',
  GETTING_ONE = 'find-one',
  GETTING_ALL = 'find-all',
  UPDATING = "update",
  REMOVING = 'remove',
}

export enum EntityPrefix {
  CREATING = 'build',
  GETTING_ONE = '',
  GETTING_ALL = '',
  UPDATING = "update",
  REMOVING = '',
}

export enum AvailableLayer {
  CONTROLLER = 'controller',
  USE_CASE = 'useCase',
  DATA_ACCESS = 'dataAccess',
  ENTITY = 'entity',
  ALL_LAYERS = 'allLayers',
}