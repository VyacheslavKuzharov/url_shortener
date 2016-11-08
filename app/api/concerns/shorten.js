var express = require('express');
var mongoose = require('mongoose');
var appRootDir = require('app-root-dir').get();

var config = require(appRootDir + '/config/config');
var urlHandler = require(appRootDir + '/lib/url-handler');
var apiHandler = require(appRootDir + '/lib/api-handler');

// define models
var Url = require(appRootDir + '/app/models/Url.js');

var router = express.Router();
module.exports = router;

router.post('/shorten', function (req, res) {
    var longUrl = req.body.long_url;
    var shortUrl = '';

    urlHandler.checkUrl(longUrl, function (err, response) {
        if(err){
            res.json(apiHandler.throwError(err));
            return;
        }

        // check if url already exists in database
        Url.findOne({long_url: longUrl}, function (err, doc){
            if (doc){
                // since the document exists, we return it without creating a new entry
                res.json(apiHandler.success({long: doc.long_url, short: doc.short_url}));
            } else {
                Url.create({long_url: longUrl, short_url: config.webhost + urlHandler.createHash(8)}, function (err, data) {
                    if (err) { return apiHandler.throwError(err); }
                    else {
                        res.json(apiHandler.success({long: data.long_url, short: data.short_url}));
                    }
                });
            }

        });
    });
});