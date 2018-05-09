const createResponse = require('../create_response');

const ok = ({ body = {}, headers } = {}) => createResponse({statusCode: 200, body, headers});

module.exports = ok;
