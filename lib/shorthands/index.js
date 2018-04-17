const ok = require('./ok');
const created = require('./created');
const deleted = require('./deleted');
const badRequest = require('./bad_request');
const unauthorized = require('./unauthorized');
const forbidden = require('./forbidden');
const serverError = require('./server_error');
const notFound = require('./not_found');

module.exports = { ok, created, deleted, badRequest, unauthorized, forbidden, serverError, notFound };
