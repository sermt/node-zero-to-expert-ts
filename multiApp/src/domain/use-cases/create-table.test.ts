import { CreateTable } from "./create-table";

describe("CreateTable", () => {
  test("should create a table with default values", () => {
    const table = new CreateTable().execute({ base: 5 });
    
    expect(table).toBe(
      "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n"
    );
  });

  test("should create a table with custom values", () => {
    const table = new CreateTable().execute({ base: 5, limit: 5 });
    
    expect(table).toBe("5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n");
  });
});
