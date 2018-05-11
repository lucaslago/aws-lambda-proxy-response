const removeFalsyProps = require('./remove_falsy_props');

const createResponse = ({statusCode, body = {}, headers } = {}) => (removeFalsyProps({statusCode, body: JSON.stringify(body), headers}));

module.exports = createResponse;
