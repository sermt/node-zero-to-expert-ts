
describe("yargs", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const yarg = await runCommand(["-b", "5"]);

    expect(yarg).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        show: false,
        s: false,
        d: "./outputs",
        n: "multiplication-table",
      })
    );
  });

  test('should return configured values when values are passed', async () => {
    const yarg = await runCommand(["-b", "1", "-l", "5", ""]);

    expect(yarg).toEqual(
      expect.objectContaining({
        b: 1,
        l: 5,
        show: false,
        s: false,
        d: "./outputs",
        n: "multiplication-table",
      })
    )
  })
});

async function runCommand(args: string[]) {
  process.argv = [...process.argv, ...args];

  const { yarg } = await import("./yargs.plugin");

  return yarg;
}
