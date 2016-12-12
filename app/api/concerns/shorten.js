var express = require('express');
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

    urlHandler.checkUrl(longUrl, function (err, response) {
        if(err){
            res.json(apiHandler.throwError(err));
            return;
        }

        // check if url already exists in database
        Url.findOne({long_url: longUrl}, function (err, doc){
            if (doc){
                // since the document exists, we return it without creating a new entry
                res.json(apiHandler.success({long: doc.long_url, short: config.web.host + doc.encoded_hash}));
            } else {
                Url.create({long_url: longUrl, encoded_hash: urlHandler.createHash(8)}, function (err, data) {
                    if (err)
                        res.json(apiHandler.throwError(err));
                    else
                        res.json(apiHandler.success({long: data.long_url, short: config.web.host + data.encoded_hash}));
                });
            }
        });
    });
});


router.get('/urls', function (req, res) {
    Url.find(function (err, projects) {
        if (err) return next(err);
        res.json(apiHandler.success(projects));
    });

});