module.exports = function (ngModule) {
    ngModule
        .constant('CONFIG',
            {
                APIHost: 'http://localhost:3000'
            });
};