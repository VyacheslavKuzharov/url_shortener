module.exports = function (ngModule) {
    ngModule
        .constant('CONFIG',
            {
                APIHost: 'http://localhost:3000'
            });



    ngModule.config(function(restmodProvider) {
        restmodProvider.rebase('DefaultPacker');
        restmodProvider.rebase({
            $config: {
                style: 'DefaultPacker',
                urlPrefix: '/api',
                jsonRoot: 'data'
            }
        });
    });
};