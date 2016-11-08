var express = require('express');

var appRootDir = require('app-root-dir').get();
var config = require(appRootDir + '/config/config');

var router = express.Router();

// define models
var Url = require(appRootDir + '/app/models/Url.js');

module.exports = router;

router.get('/', function (req, res) {
    var build = (process.env.NODE_ENV === 'production') ? 'build.min.js' : 'build.js'
    res.render('layouts/application', {buildType: build});
});

router.get('/:encoded_hash', function(req, res){
    var hash = req.params.encoded_hash;

    Url.findOneAndUpdate({encoded_hash: hash}, { $inc: { count: 1 }}, function (err, doc) {
        if (doc) {
            res.redirect(doc.long_url);
        } else {
            res.redirect(config.webhost);
        }
    });
});