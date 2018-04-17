const removeFalsyProps = obj => Object.keys(obj).reduce((filteredObj, key) => {
  if(obj[key]) {
    filteredObj[key] = obj[key];
  }
  return filteredObj;
}, {});

module.exports = removeFalsyProps;
