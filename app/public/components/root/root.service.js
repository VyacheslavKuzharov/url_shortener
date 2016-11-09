module.exports = function (ngModule) {
    ngModule.factory('rootService', rootService);

    rootService.$inject = ['$http', '$window'];

    function rootService ($http, $window) {
        return {
            saveLongUrl: saveLongUrl
        };

        function saveLongUrl(url) {
            return $http.post($window.defaultHost + 'api/v1/shorten', {long_url: url})
        }
    }
};