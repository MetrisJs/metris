"use strict";

function Base(httpServer, baseName) {
  if (!(this instanceof Base)) {
    return new Base(httpServer);
  }

  this.parseArguments(httpServer, baseName);
}

Base.prototype.parseArguments = function (httpServer, baseName) {
  if (!httpServer) {
    throw Error("Error: argument(s) missing.");
  } else if (httpServer.constructor.name !== 'Server') {
    throw Error("Error: httpServer must be a http server object.");
  }

  //Server object validated
  this._server = httpServer;

  /**
   * @todo base name should be generated from ip and port if none given
   */
  this._name = baseName || "";
};

module.exports = Base;
