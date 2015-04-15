'use strict';

    // Core
var http        = require('http'),
    parseUrl    = require('url').parse,
    querystring = require('querystring'),

    // 3rd Party
    when = require('when'),

    // Custom
    BadRequestError = require('./errors/bad-request'),
    BadUrlError     = require('./errors/bad-url');

// TODO: change to use node.http.
function get(url) {
    return when.promise(function (resolve, reject) {
        var options,
            parsed = parseUrl(url),
            responseData,
            request;

        if (!parsed) {
            throw new BadUrlError();
        }

        options = {
            hostname: parsed.host,
            path: parsed.path
        };

        request = http.get(options, function (response) {
            if (response.statusCode !== 200) {
                reject(new BadRequestError(response.statusMessage));
            }

            response.setEncoding('utf8');

            response.on('data', function (chunk) {
                if (!responseData) {
                    responseData = '';
                }

                responseData += chunk;
            });

            response.on('end', function () {
                resolve(JSON.parse(responseData));
            });
        });

        request.on('error', function (error) {
            reject(new BadRequestError(error.message));
        });
    });
}

module.exports = get;
