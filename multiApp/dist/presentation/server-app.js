"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerApp = void 0;
const create_table_1 = require("../domain/use-cases/create-table");
const save_file_1 = require("../domain/use-cases/save-file");
class ServerApp {
    static start(options) {
        const table = new create_table_1.CreateTable().execute({
            base: options.base,
            limit: options.limit,
        });
        new save_file_1.SaveFile().execute({
            fileContent: table,
            fileDestination: options.fileDestination,
            fileName: options.fileName,
        });
        if (options.showTable) {
            console.log(table);
        }
    }
}
exports.ServerApp = ServerApp;
