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
exports.default = (fs) => {
    function isFolderExisting(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield fs.promises.access(folderPath, (err) => Promise.resolve(!err));
                return true;
            }
            catch (err) {
                return false;
            }
        });
    }
    function createFolder(folderPath) {
        return fs.promises.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                Promise.reject(err);
            }
            else {
                const sentence = `folder ${folderPath} has been created`;
                console.log(sentence);
                Promise.resolve(sentence);
            }
        });
    }
    return function checkFolderExist(folderPath) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exists = yield isFolderExisting(folderPath);
                if (!exists) {
                    yield createFolder(folderPath);
                }
                return true;
            }
            catch (err) {
                console.log(err.message);
                return false;
            }
        });
    };
};
//# sourceMappingURL=check-folder-exists.js.map