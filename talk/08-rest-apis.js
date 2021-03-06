var API  = require('../lib/models/api'),
    Item = require('../lib/models/item');

API.retrieve().then(function (api) {
    console.log('\nAPI.retrieve()');
    console.log(api);
});

Item.search().then(function (results) {
    console.log('\nItem.search()');
    console.log(results);
});

Item.retrieve(1).then(function (item) {
    console.log('\nItem.retrieve(1)');
    console.log(item);
});

Item.retrieve(2).then(function (item) {
    console.log('\nItem.retrieve(2)');
    console.log(item);
});

Item.retrieve(3).then(function (item) {
    console.log('\nItem.retrieve(3)');
    console.log(item);
}).catch(function (error) {
    // handle error
});
