"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const yargs_plugin_1 = require("./config/plugins/yargs.plugin");
const { b: base, l: limit, show } = yargs_plugin_1.yarg;
const header = `
=================
Tabla del ${base}
=================\n`;
let messageContent = "";
for (let i = 1; i <= limit; i++) {
    messageContent += `${base} x ${i} = ${base * i}\n`;
}
const message = header + messageContent;
if (show) {
    console.log(message);
}
const outputPath = `./dist/outputs/`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(outputPath + `${base}.txt`, message, { encoding: "utf-8" });
