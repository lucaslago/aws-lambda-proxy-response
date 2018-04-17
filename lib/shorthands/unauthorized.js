const createResponse = require('../create_response');

const unauthorized = ( { body, headers } = {}) => createResponse({statusCode: 401, body, headers});

module.exports = unauthorized;
