var get = require('./lib/get');

get('http://localhost/api').then(function (api) {
    console.log('GET http://localhost/api');
    console.log(api);
});

get('http://localhost/api/items').then(function (results) {
    console.log('GET http://localhost/api/items');
    console.log(results);
});

get('http://localhost/api/items/1').then(function (item) {
    console.log('GET http://localhost/api/items/1');
    console.log(item);
});

get('http://localhost/api/items/2').then(function (api) {
    console.log('GET http://localhost/api/items/2');
    console.log(api);
});

get('http://localhost/api/items/3').then(function (api) {
    console.log('GET http://localhost/api/items/3');
    console.log(api);
});
