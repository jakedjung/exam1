var express = require('express');

var app = express();

var port = process.env.port || 3000

require('./config/express')(app);

require('http').createServer(app).listen(port, function () {
    console.log('info',"HTTP Server listening on port: %s, in %s mode", port, app.get('env'));
});
