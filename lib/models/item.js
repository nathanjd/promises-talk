'use strict';

    // 3rd Party
var _      = require('lodash'),

    // Custom
    API       = require('./api'),
    Model     = require('./model'),
    get       = require('../get'),

    // Cache resource url.
    urlPromise;

function Item(attributes) {
    Model.call(this, attributes);
}

Item.getURL = function () {
    return API.retrieve().then(function (api) {
        return api.findLinkURL('items');
    });
};

Item.retrieve = function (id) {
    return Item.getURL().then(function (url) {
        return get(url + '/' + id);
    }).then(function (itemAttributes) {
        return new Item(itemAttributes);
    });
};

Item.search = function () {
    return Item.getURL().then(function (url) {
        return get(url);
    }).then(function (results) {
        results.items = results.items.map(function (itemAttributes) {
            return new Item(itemAttributes);
        });

        return results;
    });
};

Item.prototype = _.create(Model.prototype, {
    retrieve: function () {
        var self = this;

        return Item.retrieve(this.id).then(function (itemAttributes) {
            self.attributes(itemAttributes);

            return self;
        });
    }
});

module.exports = Item;
