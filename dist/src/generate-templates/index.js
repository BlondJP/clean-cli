"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateControllerCode = void 0;
// dependencies
const capitalize_first_letter_1 = __importDefault(require("../utils/capitalize-first-letter"));
const prefixes_1 = require("../prefixes");
const kebabCase = require("kebab-case");
console.log("kebabCase.reverse", kebabCase.reverse);
// factories
const generate_controller_code_1 = __importDefault(require("./generate-controller-code"));
exports.generateControllerCode = generate_controller_code_1.default(kebabCase.reverse, capitalize_first_letter_1.default, prefixes_1.actions, prefixes_1.useCasePrefixes);
//# sourceMappingURL=index.js.map