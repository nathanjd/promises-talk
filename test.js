var get  = require('./lib/get'),
    API  = require('./lib/models/api'),
    Item = require('./lib/models/item');

get('http://localhost/api').then(function (api) {
    console.log('\nGET http://localhost/api');
    console.log(api);
});

get('http://localhost/api/items').then(function (results) {
    console.log('\nGET http://localhost/api/items');
    console.log(results);
});

get('http://localhost/api/items/1').then(function (item) {
    console.log('\nGET http://localhost/api/items/1');
    console.log(item);
});

get('http://localhost/api/items/2').then(function (api) {
    console.log('\nGET http://localhost/api/items/2');
    console.log(api);
});

get('http://localhost/api/items/3').then(function (api) {
    console.log('\nGET http://localhost/api/items/3');
    console.log(api);
});

API.retrieve().then(function (api) {
    console.log('\nAPI.retrieve()');
    console.log(api);
});

Item.search().then(function (results) {
    console.log('\nItem.search()');
    console.log(results);
});

Item.retrieve(1).then(function (results) {
    console.log('\nItem.retrieve(1)');
    console.log(results);
});

Item.retrieve(2).then(function (results) {
    console.log('\nItem.retrieve(2)');
    console.log(results);
});

Item.retrieve(3).then(function (results) {
    console.log('\nItem.retrieve(3)');
    console.log(results);
});
