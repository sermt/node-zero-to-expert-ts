import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory", () => {
  const getUUID = () => "12345";
  const getAge = () => 30;

  describe("buildMakePerson", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    test("should return a function", () => {
      expect(makePerson).toBeInstanceOf(Function);
    });
    test("should be able to create a person when called", () => {
      expect(makePerson({ name: "John", birthdate: "1985-10-21" })).toEqual({
        name: "John",
        id: getUUID(),
        age: getAge(),
        birthdate: "1985-10-21",
      });
    });
  });
});
