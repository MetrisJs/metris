"use strict";

describe("metris", function () {

  var metris = require("../index.js");

  it("exports Relay() constructor function", function () {
    var metrisRelay = new metris.Relay();

    expect(metrisRelay).to.be.an.object;
  });

  it("exports Base() constructor function", function () {
    var metrisBase = new metris.Base();

    expect(metrisBase).to.be.an.object;
  });
});