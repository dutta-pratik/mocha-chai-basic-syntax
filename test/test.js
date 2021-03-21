const assert = require("assert");

// basic structure

describe("file to be tested", () => {
  context("function to be tested", () => {
    before(() => {
      console.log("==before==");
    });
    after(() => {
      console.log("==after==");
    });
    // beforeEach(() => {
    //   console.log("==beforeEach==");
    // });
    // afterEach(() => {
    //   console.log("==afterEach==");
    // });
    it("should do something", () => {
      assert.strictEqual(1, 2);
    });
    it("this is a pending test");
  });

  context("another function to test", () => {
    it("should do something", () => {
      assert.strictEqual(1, 1);
    });
  });
});
