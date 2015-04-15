var when     = require('when'),
	parallel = require('when/parallel');

function doSomethingAsync() {
    return when.promise(function (resolve, reject) {
        setTimeout(function () {
        	console.log('.');
            resolve('Async operation finished!');
        }, 1000);
    });
}

parallel([
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync,
	doSomethingAsync
]).then(function (results) {
	console.log('Async tasks completed:', results);
});
