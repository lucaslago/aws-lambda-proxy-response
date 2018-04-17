const createResponse = require('../create_response');

const badRequest = ({ body, headers } = {}) => createResponse({statusCode: 400, body, headers});

module.exports = badRequest;
