"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function getCurrentDir() {
    const currentDir = process.env.PWD;
    const sourceDir = "/src";
    fs_1.default.promises
        .access(`${currentDir}${sourceDir}`)
        .catch(() => console.warn(`Warning: there is no ${sourceDir} folder in ${currentDir}`));
    return currentDir;
}
exports.default = getCurrentDir;
//# sourceMappingURL=get-current-dir.js.map