module.exports = function (ngModule) {
    ngModule.factory('rootService', rootService);

    rootService.$inject = ['$http', 'CONFIG'];

    function rootService ($http, CONFIG) {
        return {
            saveLongUrl: saveLongUrl

        };

        function saveLongUrl(url) {
            return $http.post(CONFIG.APIHost + '/api/v1/shorten', {long_url: url})
        }
    }
};