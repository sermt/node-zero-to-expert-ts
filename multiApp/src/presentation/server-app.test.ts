import { CreateTable } from "../domain/use-cases/create-table";
import { SaveFile } from "../domain/use-cases/save-file";
import { ServerApp } from "./server-app";

describe("ServerApp", () => {
  test("should create a server app instance", () => {
    expect(new ServerApp()).toBeInstanceOf(ServerApp);
  });

  /* test("should start the server app with options", () => {
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileSpy = jest.spyOn(SaveFile.prototype, "execute");
    const options = {
      base: 1,
      limit: 10,
      showTable: true,
      fileName: "test",
      fileDestination: "test",
    };

    ServerApp.start(options);

    expect(createTableSpy).toHaveBeenCalledTimes(1);

    expect(createTableSpy).toHaveBeenCalledWith({
      base: options.base,
      limit: options.limit,
    });

    expect(saveFileSpy).toHaveBeenCalledTimes(1);

    expect(saveFileSpy).toHaveBeenCalledWith({
      fileContent: expect.any(String),
      fileDestination: expect.any(String),
      fileName: expect.any(String),
    });
  }); */

  test("should start the server app with options", () => {
    const logMock = jest.fn();
    const createMock = jest.fn().mockReturnValue("test");
    const saveMock = jest.fn();

    jest.spyOn(console, "log").mockImplementation(logMock);
    jest.spyOn(CreateTable.prototype, "execute").mockImplementation(createMock);
    jest.spyOn(SaveFile.prototype, "execute").mockImplementation(saveMock);

    ServerApp.start({
      base: 1,
      limit: 10,
      showTable: true,
      fileName: "test",
      fileDestination: "test",
    });

    expect(logMock).toHaveBeenCalledTimes(1);
    expect(createMock).toHaveBeenCalledTimes(1);
    expect(saveMock).toHaveBeenCalledTimes(1);

    expect(createMock).toHaveBeenCalledWith({
      base: 1,
      limit: 10,
    });
    expect(saveMock).toHaveBeenCalledWith({
      fileContent: "test",
      fileDestination: "test",
      fileName: "test",
    });
  });
});
