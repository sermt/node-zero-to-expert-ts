import { emailTemplate } from "../../src/js-foundation/01-template";

describe("emailTemplate", () => {
  test("should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi,");
  });

  test("should contain name", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
  });
  
  test("should contain order id", () => {
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});
