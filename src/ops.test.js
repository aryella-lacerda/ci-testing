const { add } = require("./ops");

test("add two numbers", () => {
  expect(add(1, 1)).toBe(2);
});

test("add two numbers, negative", () => {
  expect(add(1, -30)).toBe(0);
});
