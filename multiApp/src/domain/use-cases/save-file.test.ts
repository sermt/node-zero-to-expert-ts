import { SaveFile } from "./save-file";
import fs from "fs";

describe("SaveFile", () => {
  const customText = "custom-test";
  beforeEach(() => {
    if (fs.existsSync("./dist/outputs/table.txt")) {
      fs.rmSync("./dist/outputs/table.txt");
    }
    if (fs.existsSync(`./dist/${customText}/${customText}.txt`)) {
      fs.rmSync(`./dist/${customText}/${customText}.txt`);
    }
  });

  test("should save file with default values when file is saved", () => {
    new SaveFile().execute({ fileContent: "test" });

    expect(fs.existsSync("./dist/outputs/table.txt")).toBe(true);
  });

  test("should save file with passed content when file is saved", () => {
    new SaveFile().execute({ fileContent: "test" });

    expect(
      fs.readFileSync("./dist/outputs/table.txt", { encoding: "utf-8" })
    ).toBe("test");
  });

  test("should throw an error if there is an error saving the file", () => {
    const error = new Error("Error saving file");
    const mkdirSyncMock = jest.spyOn(fs, "mkdirSync").mockImplementation(() => {
      throw error;
    });

    // Utiliza una función de flecha para capturar la excepción correctamente
    expect(() => new SaveFile().execute({ fileContent: "test" })).toThrow(
      error
    );

    mkdirSyncMock.mockRestore();
  });
});
