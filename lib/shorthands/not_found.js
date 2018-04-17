const createResponse = require('../create_response');

const notFound = ({ body, headers } = {}) => createResponse({statusCode: 404, body, headers});

module.exports = notFound;
