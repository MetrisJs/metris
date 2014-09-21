"use strict";
/*global describe, it, before, beforeEach, after, afterEach, expect, should */

describe("metris", function () {

  var metris = require("../index.js");

  it("exports Relay() constructor function", function () {
    expect(metris.Relay).to.be.a.function;
  });

  it("exports Base() constructor function", function () {
    expect(metris.Base).to.be.a.function;
  });
});
