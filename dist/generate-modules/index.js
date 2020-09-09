"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateController = void 0;
// deps
const get_current_dir_1 = __importDefault(require("../../get-current-dir"));
const sourceDir = `${get_current_dir_1.default}/src`;
const prefixes_1 = require("../prefixes");
const utils_1 = require("../utils");
const generate_templates_1 = require("../generate-templates");
// factories
const generate_controller_1 = __importDefault(require("./generate-controller"));
// exports
exports.generateController = generate_controller_1.default(sourceDir, utils_1.createFile, generate_templates_1.generateControllerCode, utils_1.checkFolderExist, prefixes_1.controllerPrefixes, prefixes_1.actions);
//# sourceMappingURL=index.js.map