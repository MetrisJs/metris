"use strict";

describe("Metris", function () {
  it("can be constructed", function () {
    var Metris = require("../");

    expect(new Metris()).to.not.throw;
  });
});