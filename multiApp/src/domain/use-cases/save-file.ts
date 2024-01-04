import fs from "fs";
export class SaveFile implements SaveFileUseCase {
  execute({
    fileContent,
    fileDestination = "outputs",
    fileName = "table",
  }: SaveFileOptions): void {
    const outputPath = `./dist/${fileDestination}/`;
    try {
      fs.mkdirSync(outputPath, { recursive: true });
      fs.writeFileSync(outputPath + `${fileName}.txt`, fileContent, {
        encoding: "utf-8",
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error saving file");
    }
  }
}

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => void;
}

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}
