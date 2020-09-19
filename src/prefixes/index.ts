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
