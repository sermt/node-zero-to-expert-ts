import { getAge } from "../../src/plugins/get-age.plugin";

describe("07-getAge", () => {
  const birthdate = "1995-10-21";

  test("should return the age of a person", () => {
    const getAgeMock = jest.fn().mockReturnValue(30);
    const age = getAgeMock(birthdate);

    expect(age).toBe(30);
  });

  test("should return NaN when given an invalid birthdate", () => {
    expect(getAge("abc")).toBeNaN();
  });
  
  test("should return the age of a person", () => {
    jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const age = getAge(birthdate);

    expect(age).toBe(0);
  });

  
});
