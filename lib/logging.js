var fs = require('fs');
var util = require('util');
var mongoose = require('mongoose');
var appRootDir = require('app-root-dir').get();


function trace (req, res) {
    var logFile = fs.createWriteStream(appRootDir + '/logs/development.log', { flags: 'a' });
    var logStdout = process.stdout;
    console.log('Started ' + req.method + ' for ' + 'request: ' + req.url);
    mongoose.set('debug', true);

    console.log = function () {
        logFile.write(util.format.apply(null, arguments) + '\n');
        logStdout.write(util.format.apply(null, arguments) + '\n');
    };
    console.error = console.log;
}

exports.trace = trace;