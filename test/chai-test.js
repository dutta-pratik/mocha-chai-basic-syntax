const chai = require("chai");
const expect = chai.expect;

describe("chai test", () => {
  it("should compare values", () => {
    expect(1).to.be.equal(1);
  });
  it("should compare obj", () => {
    // expect({ name: "xyz" }).to.be.equal({ name: "xyz" });
    //for obj comparison we have to use deep equal
    expect({ name: "xyz" }).to.deep.equal({ name: "xyz" });
    expect({ name: "foo" }).to.have.property("name").to.equal("foo");
    expect(3).to.be.a("number");
    expect("bar").to.be.a("string").with.length(3);
  });
});
