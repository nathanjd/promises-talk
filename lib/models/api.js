'use strict';

    // 3rd Party
var _    = require('lodash'),
    when = require('when'),

    // Custom
    Model   = require('./model'),
    get     = require('../get'),

    // Config
    apiURL = 'http://localhost/api',

    // Cache and batch calls to a single request.
    apiPromise;

function API(attributes) {
    Model.call(this, attributes);
}

API.retrieve = function () {
    // Has API already been requested?
    if (apiPromise) {
        // Return the request's promise.
        return apiPromise;
    }

    // Start async operation.
    apiPromise = get(apiURL).then(function (apiAttributes) {
        return new API(apiAttributes);
    }).catch(function(statusCode) {
        apiPromise = undefined;
    });

    return apiPromise;
};

API.prototype = _.create(Model, {});

module.exports = API;
