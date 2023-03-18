const { add } = require("./ops");

test("add two numbers", () => {
  expect(add(1, 1)).toBe(2);
});
