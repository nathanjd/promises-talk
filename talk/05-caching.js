    // Custom
var get = require('../lib/get'),

    // State
    getPromise;

function retrieve() {
    // Already been requested?
    if (getPromise) {
        // Return the request's promise.
        return getPromise;
    }

    // Start async operation.
    getPromise = get('http://localhost/api');

    return getPromise;
}

retrieve().then(function (data) {
    console.log('1', data);
});

retrieve().then(function (data) {
    console.log('2', data);
});

retrieve().then(function (data) {
    console.log('3', data);
});
