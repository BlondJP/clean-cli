export const controllerPrefixes = [
  "create",
  "get-one",
  "get-all",
  "update",
  "delete"
];

export const useCasePrefixes = [
  "add",
  "find-one",
  "find-all",
  "edit",
  "remove"
];

// to specify
export const entityPrefixes = [];

export const dataAccessPrefixes = [
  "insert",
  "find-one", // maybe "select" to respect SQL vocabulary
  "find-all",
  "update",
  "delete"
];

export const keys = {
  creating: 0,
  gettingOne: 1,
  gettingAll: 2,
  updating: 3,
  removing: 4
};
