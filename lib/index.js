const createResponse = require('./create_response');
const shorthands = require('./shorthands');
const proxyObjectMethods = require('./proxy_object_methods');

const lib = Object.assign({ createResponse }, shorthands);

const Response = options => {
  if(options) {
    return proxyObjectMethods(lib, {
      apply(target, thisArg, argumentsList) {
        return Object.assign(options, target(...argumentsList));
      }
    });
  }
  return lib;
};

module.exports = Response;

