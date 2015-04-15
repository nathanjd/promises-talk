var get = require('../lib/get');

get('http://localhost/api').then(function (data) {
    console.log('\nGET http://localhost/api Success:');
    console.log(data);
});

get('.\3asd').then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error('\nGET .\3asd Error:');
    console.error(error);
});
