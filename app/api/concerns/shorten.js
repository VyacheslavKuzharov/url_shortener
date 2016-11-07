var express = require('express');
var appRootDir = require('app-root-dir').get();
var urlHandler = require(appRootDir + '/lib/url-handler');
var apiHandler = require(appRootDir + '/lib/api-handler');

var router = express.Router();
module.exports = router;

router.post('/shorten', function (req, res) {
    var long_url = req.body.long_url;

    urlHandler.checkUrl(long_url, function (err, response) {
        if(err){
            res.json(apiHandler.throwError(err));
            return;
        }

        res.json(apiHandler.success(response));
    });
});