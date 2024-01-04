"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveFile = void 0;
const fs_1 = __importDefault(require("fs"));
class SaveFile {
    execute({ fileContent, fileDestination = "outputs", fileName = "table", }) {
        const outputPath = `./dist/${fileDestination}/`;
        fs_1.default.mkdirSync(outputPath, { recursive: true });
        fs_1.default.writeFileSync(outputPath + `${fileName}.txt`, fileContent, {
            encoding: "utf-8",
        });
    }
}
exports.SaveFile = SaveFile;
