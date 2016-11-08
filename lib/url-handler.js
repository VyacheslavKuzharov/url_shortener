var url = require('url');

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



// This will create a random ID, not a unique one.
// I supose, better solution is to implement npm shortid package

function createHash(len) {
    var str = '';
    while(str.length < len) str += randomChar();
    return str;
}

function randomChar() {
    var n = Math.floor(Math.random() * 62);
    if(n < 10) return n; // 0-9
    if(n < 36) return String.fromCharCode(n + 55); // A-Z
    return String.fromCharCode(n+61); // a-z
}

exports.createHash = createHash;