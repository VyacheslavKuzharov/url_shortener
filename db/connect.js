// load mongoose package
var mongooseHandler = require('mongoose');
// Use native Node promises
mongooseHandler.Promise = global.Promise;
// connect to MongoDB
mongooseHandler.connect('mongodb://localhost/url_shortener')
    .then(function(){console.log('connection succesful')})
.catch(function(err) {console.error(err)});

module.exports = mongooseHandler;