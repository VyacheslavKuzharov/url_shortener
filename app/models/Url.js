var mongoose = require('mongoose');
var appRootDir = require('app-root-dir').get();
var timeHandler = require(appRootDir + '/lib/time-handler');

var UrlSchema = new mongoose.Schema({
    long_url: String,
    encoded_hash: String,
    count: Number,
    created_at: { type: Date, default: Date.now },
    expire_at: {type: Date, default: new Date(timeHandler.after15Days())}
});

module.exports = mongoose.model('Url', UrlSchema);