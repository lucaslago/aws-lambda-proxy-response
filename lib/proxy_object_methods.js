const proxyObjectMethods = (object, handler) => {
  const proxiedObject = Object.entries(object)
    .reduce((obj, [key, func]) => {
      obj[key] = new Proxy(func, handler);
      return obj;
    }, {});
  return proxiedObject;
};


module.exports = proxyObjectMethods;
