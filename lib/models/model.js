'use strict';

var _ = require('lodash');

function Model() {
    _.assign(this, attributes);
}

Model.findLinkURL = function (rel, links) {
    var url;

    if (!links && this.links) {
        links = this.links;
    }

    links.forEach(function (link) {
        if (link.rel === rel) {
            url = link.href;
        }
    });

    return url;
};

Model.prototype = {
    attributes: function (attributes) {
        if (attributes) {
            _.assign(this, attributes);
        }

        return _.create({}, this);
    },

    findLinkURL: function (rel) {
        return Model.findLinkURL(rel, this.links);
    },

    url: function () {
        return this.findLinkURL('self');
    }
};

module.exports = Model;
