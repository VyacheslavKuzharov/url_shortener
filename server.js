var express = require('express');
var bodyParser =  require('body-parser');
var fs = require('fs');
var util = require('util');

var logger = require('./lib/logging');
var config = require('./config/config');

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
app.use(require('./app/resources/application'));

// Include api module
app.use(require('./app/api/base'));


// Uncomment when there will be more than one state
// app.all('/*', function(req, res) {
//     res.redirect('/#' + req.url)
// });


var listener = app.listen(config.web.port);
console.log('Server listening on port: %s', listener.address().port);