'use strict';

var _ = require('lodash');

function BadRequestError(message) {
    this.name = 'BadRequestError';
    this.message = message || 'Bad Request.';
}

BadRequestError.prototype = _.create(Error.prototype, {});

module.exports = BadRequestError;
