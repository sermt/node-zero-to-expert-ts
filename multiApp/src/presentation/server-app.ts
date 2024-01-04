import { CreateTable } from "../domain/use-cases/create-table";
import { SaveFile } from "../domain/use-cases/save-file";

export class ServerApp {
  static start(options: StartOptions): void {
    const table = new CreateTable().execute({
      base: options.base,
      limit: options.limit,
    });

    new SaveFile().execute({
      fileContent: table,
      fileDestination: options.fileDestination,
      fileName: options.fileName,
    });

    if (options.showTable) {
      console.log(table);
    }
  }
}

interface StartOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileName?: string;
  fileDestination?: string;
}
