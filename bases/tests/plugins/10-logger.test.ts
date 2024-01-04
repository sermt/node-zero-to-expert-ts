import { buildLogger, logger } from '../../src/plugins/logger.plugin';

describe("10-logger", () => {
  test("should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("logger.log should log a message", () => {
    const winstonLoggerMock = jest.spyOn(logger, "log");
    const testMessage = "test message";
    const testService = "test service";
    const testLevel="info";

    buildLogger(testService);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      testLevel,
      expect.objectContaining({
      
        message: testMessage,
        service: testService,
      })
    );
  });
});
