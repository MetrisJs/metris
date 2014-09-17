"use strict";

var metris = require("../index.js"),
  metrisBase,
  httpServer = require('http').createServer();


describe("Base", function () {

  describe("parseArguments", function () {

    it("should throw an error if httpServer is missing", function () {
      expect(metris.Base.prototype.parseArguments.bind(metris.Base.prototype))
        .to.throw("Error: argument(s) missing.");
    });

    it("should verify that httpServer is Server object", function () {
      expect(metris.Base.prototype.parseArguments.bind(metris.Base.prototype, {}))
        .to.throw("Error: httpServer must be a http server object.");
    });

    it("should accept and assign the httpServer argument as this._server", function () {
      metrisBase = new metris.Base(httpServer);

      expect(metrisBase._server).to.equal(httpServer);
    });

    it("should assign the server name if the serverName parameter is given", function () {
      var someServerName = "some name";

      metrisBase = new metris.Base(httpServer, someServerName);

      expect(metrisBase._name).to.equal(someServerName);
    });

  });

});
