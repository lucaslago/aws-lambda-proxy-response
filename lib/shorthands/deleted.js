const createResponse = require('../create_response');

const deleted = ({ body, headers } = {}) => createResponse({ statusCode: 204, body, headers });

module.exports = deleted;
