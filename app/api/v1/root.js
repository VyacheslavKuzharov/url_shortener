var express = require('express');
var app = express();
var appRootDir = require('app-root-dir').get();


module.exports = app.use('/v1', require(appRootDir + '/app/api/concerns/shorten'));
module.exports = app.use('/v1', require(appRootDir + '/app/api/concerns/status'));