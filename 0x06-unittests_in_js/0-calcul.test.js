const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("Should return 11 when inputs are 5 and 6", () => {
    assert.strictEqual(calculateNumber(5, 6), 11);
  });
  it("Should return 10 when inputs are 5 and 4.7", () => {
    assert.strictEqual(calculateNumber(5, 4.7), 10);
  });
  it("should return 0 when inputs are 0 and 0", () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it("should return -2 when inputs are -1.4 and -1.4", () => {
    assert.strictEqual(calculateNumber(-1.4, -1.4), -2);
  });
});
