const createResponse = require('./create_response');
const shorthands = require('./shorthands');
const proxyLibResponses = require('./proxy_lib_responses');

const lib = Object.assign({ createResponse }, shorthands);
lib.withDefaults = proxyLibResponses(lib);

module.exports = lib;

