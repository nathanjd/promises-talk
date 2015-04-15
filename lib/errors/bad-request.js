'use strict';

function BadRequestError(message) {
    this.name = 'BadRequestError';
    this.message = message || 'Bad Request.';
}

BadRequestError.prototype = Error.prototype;

module.exports = BadRequestError;
