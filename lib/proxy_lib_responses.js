const proxyLibResponses = (lib) => {
  return ({ headers } = {}) => {
    const handler = {
      apply: (target, thisArg, argumentsList) => {
        return Object.assign({ headers }, target(...argumentsList));
      }
    };
    const proxiedResponse = Object.entries(lib)
      .filter(([key]) => key !== 'withDefaults')
      .reduce((proxiedResponse, [key, func]) => {
        proxiedResponse[key] = new Proxy(func, handler);
        return proxiedResponse;
      }, {});
    return proxiedResponse;
  };
};

module.exports = proxyLibResponses;
