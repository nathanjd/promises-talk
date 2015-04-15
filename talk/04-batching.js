var get = require('../lib/get'),

    requesting = false,
    getPromise;

function retrieve() {
    // Already been requested?
    if (requesting) {
        // Return the request's promise.
        return getPromise;
    }

    requesting = true;

    // Start async operation.
    getPromise = get('http://localhost/api').then(function (data) {
        // End this batch.
        requesting = false;

        // Request succeeded, resolve promise.
        return data;
    });

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
