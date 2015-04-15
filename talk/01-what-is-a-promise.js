// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// https://promisesaplus.com/

// https://github.com/cujojs/when/blob/master/docs/api.md#api

// https://github.com/nathanjd/promises-talk

var when = require('when');

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
            reject(new Error('Async operation failed!'));
        }, 2000);
    });
}

doSomethingAsync().then(function (data) {
    console.log(data);
});

console.log('1');

failSomethingAsync().then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
});

console.log('2');
