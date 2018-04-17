const createResponse = require('../create_response');

const forbidden = ( { body, headers } = {}) => createResponse({statusCode: 403, body, headers});

module.exports = forbidden;
