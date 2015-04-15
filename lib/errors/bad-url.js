'use strict';

function BadUrlError(message) {
    this.name = 'BadUrlError';
    this.message = message || 'Could not parse url.';
}

BadUrlError.prototype = Error.prototype;

module.exports = BadUrlError;
