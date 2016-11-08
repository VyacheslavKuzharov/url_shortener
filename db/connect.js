var mongooseHandler = require('mongoose');
var config = require('../config/config');
// Use native Node promises
mongooseHandler.Promise = global.Promise;
// connect to MongoDB
mongooseHandler.connect(config.db.url)
    .then(function(){console.log('connection succesful')})
    .catch(function(err) {console.error(err)});

module.exports = mongooseHandler;