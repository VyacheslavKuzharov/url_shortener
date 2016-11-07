var url = require("url");

function checkUrl (long_url, callback) {
    var result = url.parse(long_url);

    if(result.host == null)
        return callback(new Error('Paste original url'));

    var opt = {
        host: result.hostname,
        path: result.path
    },
    protocol = result.protocol.split(':')[0],
    lib = require(protocol);


    var request = lib.request(opt, function( response ) {
        if (response.statusCode < 200 || response.statusCode > 299)
            return callback(new Error('Failed to load page, status code: ' + response.statusCode));
         else
            return callback(null, opt);
    });

    // handle connection errors of the request
    request.on('error', function(err) {return callback(err)})
    request.end();

}

exports.checkUrl = checkUrl;