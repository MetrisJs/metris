var minCounter = 10000,
  maxCounter = 99999,
  ii = minCounter;

/**
 * Generate a random number to decrease the level of collision while enabling the clients to
 *  view sequence of incoming requests at a glance. Useful for detecting long running
 *  requests since timestamp is using the time of request completion
 *
 * @param low {number}
 * @param high {number}
 * @returns {number}
 * @private
 */
function _randomIntInc (low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

/**
 * Generates a "name" that metris will use in all its services when referring to this request
 *
 * @param serverId {string} - Ip or a custom name to identify this server
 * @param incomingIp {string} - Ip of incoming request
 * @returns {string} randomId - permanent name used to identify this request
 */
function generateIdForRequest(serverId, incomingIp) {

  var randomId = serverId
    + "|" + new Date().getTime()
    + "|" + incomingIp
    + "|" + _randomIntInc(100, 999)
    + "|" + ii;

  ii = (ii + 1) % maxCounter;

  return randomId;
}

module.exports = generateId;
