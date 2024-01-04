import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("03-callbacks", () => {
  describe("getUserById", () => {
    const id = 10;
    test("should throw an error if user is not found", (done) => {
      getUserById(id, (err, user) => {
        expect(err).toBe(`User not found with id ${id}`);
        done();
      });
    });
    test("should return user as undefined if user is not found", (done) => {
      getUserById(id, (err, user) => {
        expect(user).toBeUndefined();
        done();
      });
    });
    test("should return user when is found", (done) => {
      const id = 1;
      getUserById(id, (err, user) => {
        expect(user).toEqual({ name: "John Doe" , id: 1});
        done();
      });
    });
  });
});
