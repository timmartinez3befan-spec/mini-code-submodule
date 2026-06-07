const assert = require("assert");
const {
  add,
  subtract,
  multiply,
  divide,
} = require("../src/calculator");

describe("calculator", function () {
  it("adds two numbers", function () {
    assert.strictEqual(add(2, 3), 5);
  });

  it("subtracts two numbers", function () {
    assert.strictEqual(subtract(10, 4), 6);
  });

  it("multiplies two numbers", function () {
    assert.strictEqual(multiply(3, 4), 12);
  });

  it("divides two numbers", function () {
    assert.strictEqual(divide(10, 2), 5);
  });
});