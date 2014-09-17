"use strict";

/**
 * @description
 *  Metris Relay constructor.
 *  The relay is a socket server that all metris bases connect to in order to transmit data to
 *  the desired target. You can connect to this relay directly through a browser to track
 *  incoming requests realtime with some basic server health checks.
 *
 *  Optionally, you can connect to a metris server to record the data.
 *
 *  Default relay configuration can be set by passing in a config object to overwrite default behaviour.
 *  Config file can be generated by logging into metris account for API specific data to connect to metris services.
 *
 *  If no config set, then runs Metris using socket.io on port 9337 with no encryption.
 *
 * @param config {JSON} - object containing Metris Relay socket-server configuration
 * @returns {Metris}
 * @constructor
 */
function MetrisRelay(config) {
  if (!(this instanceof MetrisRelay)) {
    return new MetrisRelay(config);
  }

  /**
   * List of metris bases that are connected to this relay. Each base is identified by its base name.
   *
   * @type {{}}
   */
  this.bases = {};

  this.incommingRequests = {};
}

MetrisRelay.prototype.addBase = function (baseType, base, baseName) {
  if (baseName) {
    parsebaseName(baseName);
  }
};



module.exports = MetrisRelay;