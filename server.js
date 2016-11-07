var express = require('express');
var bodyParser =  require('body-parser');

require('./db/connect');
var app = express();

app.set('views', './app/views');
app.set('view engine', 'pug');

app.use(express.static('app/public'));
app.use(express.static('node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// Include application module
var applicationRouter = require('./app/resources/application');
app.use(applicationRouter);

app.all('/*', function(req, res) {
    res.redirect('/#' + req.url)
});


var listener = app.listen(3000);
console.log('Server listening on port: %s', listener.address().port);