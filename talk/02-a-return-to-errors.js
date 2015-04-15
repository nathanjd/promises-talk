var _    = require('lodash'),
    when = require('when');

function CustomError(message) {
    this.name = 'CustomError';
    this.message = message || 'Something went wrong.';
}

CustomError.prototype = _.create(Error.prototype, {});

function doSomethingAsync() {
    return when.promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async operation finished!');
        }, 1000);
    });
}

function failSomethingAsync() {
    return when.promise(function (resolve, reject) {
        setTimeout(function () {
            reject(new CustomError('Async operation failed!'));
        }, 2000);
    });
}

function throwError() {
    return when.promise(function () {
        throw new Error('Unexpected error.');
    });
}

function doTask(task) {
    return when.promise(function (resolve, reject) {
        task().then(function (data) {
            resolve(data);
        }).catch(function (error) {
            if (error instanceof CustomError) {
                resolve('Expected error handled.');
            } else {
                reject(error);
            }
        });
    });
}


doTask(doSomethingAsync).then(function (data) {
    console.log('1 Success:', data);
});

doTask(failSomethingAsync).then(function (data) {
    console.log('2 Handled error:', data);
}).catch(function (error) {
    console.log('2 Unhandled error:', error);
});

doTask(throwError).then(function (data) {
    console.log('3 Success:', data);
}).catch(function (error) {
    console.log('3 Unhandled error:', error);
});
