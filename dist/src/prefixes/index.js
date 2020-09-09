"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.dataAccessPrefixes = exports.entityPrefixes = exports.useCasePrefixes = exports.controllerPrefixes = void 0;
exports.controllerPrefixes = [
    "create",
    "get-one",
    "get-all",
    "update",
    "delete",
];
exports.useCasePrefixes = [
    "add",
    "find-one",
    "find-all",
    "edit",
    "remove",
];
// to specify
exports.entityPrefixes = [];
exports.dataAccessPrefixes = [
    "insert",
    "find-one",
    "find-all",
    "update",
    "remove",
];
exports.actions = {
    creating: 0,
    gettingOne: 1,
    gettingAll: 2,
    updating: 3,
    removing: 4,
};
//# sourceMappingURL=index.js.map