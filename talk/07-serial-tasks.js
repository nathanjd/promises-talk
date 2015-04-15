var when     = require('when'),
	sequence = require('when/sequence');

function doSomethingAsync() {
    return when.promise(function (resolve, reject) {
        setTimeout(function () {
        	console.log('.');
            resolve('Async operation finished!');
        }, 1000);
    });
}

sequence([
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync
]).then(function (results) {
	console.log('Serial tasks completed:', results);
});
