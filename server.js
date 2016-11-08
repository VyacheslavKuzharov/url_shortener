var express = require('express');
var bodyParser =  require('body-parser');
var fs = require('fs');
var util = require('util');
var appRootDir = require('app-root-dir').get();

var logger = require(appRootDir + '/lib/logging');
require('./db/connect');
var app = express();

app.set('views', './app/views');
app.set('view engine', 'pug');


app.use(function (req, res, next) {
    logger.trace(req, res);
    next()
});

app.use(express.static('app/public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Include application module
var applicationRouter = require('./app/resources/application');
app.use(applicationRouter);

// Include api module
app.use(require('./app/api/base'));

app.all('/*', function(req, res) {
    res.redirect('/#' + req.url)
});


var listener = app.listen(3000);
console.log('Server listening on port: %s', listener.address().port);