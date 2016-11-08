var express = require('express');

var appRootDir = require('app-root-dir').get();
var config = require(appRootDir + '/config/config');

var router = express.Router();

// define models
var Url = require(appRootDir + '/app/models/Url.js');

module.exports = router;

router.get('/', function (req, res) {
    res.render('layouts/application');
});

router.get('/:encoded_hash', function(req, res){
    var hash = req.params.encoded_hash;

    Url.findOne({encoded_hash: hash}, function (err, doc){
        if (doc) {
            res.redirect(doc.long_url);
        } else {
            res.redirect(config.webhost);
        }
    });
});