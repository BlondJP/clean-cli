"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sourceDir, createFile, createTemplate, checkFolderExist, controllerPrefixes, actions) => function generateController(entityName, action) {
    return __awaiter(this, void 0, void 0, function* () {
        const filePrefix = controllerPrefixes[actions[action]];
        const fileName = `${filePrefix}-${entityName}.js`;
        const controllersFolder = `${sourceDir}/controllers`;
        yield checkFolderExist(controllersFolder);
        const filePath = `${controllersFolder}/${fileName}`;
        const template = createTemplate(entityName, filePrefix, action);
        yield createFile(filePath, template);
        return filePath;
    });
};
//# sourceMappingURL=generate-controller.js.map