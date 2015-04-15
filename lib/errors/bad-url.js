'use strict';

var _ = require('lodash');

function BadUrlError(message) {
    this.name = 'BadUrlError';
    this.message = message || 'Could not parse url.';
}

BadUrlError.prototype = _.create(Error.prototype, {});

module.exports = BadUrlError;
