const createResponse = require('../create_response');

const created = ({ body, headers } = {}) => createResponse({statusCode: 201, body, headers});

module.exports = created;
