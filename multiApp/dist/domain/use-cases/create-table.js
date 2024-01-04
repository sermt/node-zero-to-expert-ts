"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    //constructor() {}
    execute({ base, limit = 10 }) {
        let messageContent = "";
        for (let i = 1; i <= limit; i++) {
            messageContent += `${base} x ${i} = ${base * i}\n`;
        }
        return messageContent;
    }
}
exports.CreateTable = CreateTable;
