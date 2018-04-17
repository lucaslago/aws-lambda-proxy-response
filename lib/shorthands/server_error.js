const createResponse = require('../create_response');

const serverError = ({ body, headers } = {}) => createResponse({statusCode: 500, body, headers});

module.exports = serverError;
