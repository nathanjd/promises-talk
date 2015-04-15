var fs = require('fs'),
    express = require('express'),
    app     = express(),
    server;

function getItemPath(id) {
    return __dirname + '/mock/item-' + id + '.json';
}

// Static assets.
// app.use(express.static(__dirname + '/mock'));

// GET /api
app.get('/api', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.sendFile(__dirname + '/mock/api.json');
});

// GET /api/items
app.get('/api/items', function (request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.sendFile(__dirname + '/mock/items.json');
});

// GET /api/items/:id
app.get('/api/items/:id', function (request, response) {
    var path = getItemPath(request.params['id']);

    response.setHeader('Content-Type', 'application/json');
    response.sendFile(path);
});

server = app.listen(80, function () {
    var host = server.address().address,
        port = server.address().port;

  console.log('Mock API listening at http://%s:%s', host, port);
});
