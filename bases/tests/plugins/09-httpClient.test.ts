import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe("09-httpClient", () => {
  test("should return data", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
  });
  test("should have post method", async () => {
    expect(typeof httpClientPlugin.post).toBe("function");
  });
  test("should have put method", async () => {
    expect(typeof httpClientPlugin.put).toBe("function");
  });
  test("should have delete method", async () => {
    expect(typeof httpClientPlugin.delete).toBe("function");
  });
});
