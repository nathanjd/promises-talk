'use strict';

    // 3rd Party
var _    = require('lodash'),
    when = require('when'),

    // Custom
    Model   = require('../model'),
    get     = require('../get'),

    // Config
    apiURL = 'localhost/api',

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
    apiPromise = get('/api', 'GET').then(function (response) {
        return new API(response.data);
    }).catch(function(statusCode) {
        apiPromise = undefined;
    });

    return apiPromise;
};

API.prototype = _.create(Model, {});

module.exports = API;
