const createResponse = require('../create_response');

const unprocessableEntity = ( { body, headers } = {}) => createResponse({statusCode: 422, body, headers});

module.exports = unprocessableEntity;
