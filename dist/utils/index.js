"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFile = exports.checkFolderExist = void 0;
// dependencies
const fs_1 = __importDefault(require("fs"));
// factories
const check_folder_exists_1 = __importDefault(require("./check-folder-exists"));
const create_file_1 = __importDefault(require("./create-file"));
// exports
exports.checkFolderExist = check_folder_exists_1.default(fs_1.default);
exports.createFile = create_file_1.default(fs_1.default);
//# sourceMappingURL=index.js.map