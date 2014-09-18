"use strict";

function Base(httpServer, baseName) {
  if (!(this instanceof Base)) {
    return new Base(httpServer);
  }

  /**
   * "Pointer" to an http Server instance. These are the requests this base instance will listen to
   * @type {http.Server}
   */
  this.server = undefined;
  /**
   * Name of this base. All requests to this base will be grouped under this name.
   * @type {string}
   */
  this.name = undefined;

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

  /** @todo base name should be generated from ip and port if none given */
  this._name = baseName || "";
};

module.exports = Base;
