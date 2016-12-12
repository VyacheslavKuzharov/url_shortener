// module.exports = function (ngModule) {
//     ngModule.factory('rootService', rootService);
//
//     rootService.$inject = ['$http', '$window'];
//
//     function rootService ($http, $window) {
//         return {
//             saveLongUrl: saveLongUrl
//         };
//
//         function saveLongUrl(url) {
//             return $http.post($window.defaultHost + 'api/v1/shorten', {long_url: url})
//         }
//     }
// };


module.exports = function (ngModule) {
    ngModule.factory('Url', function(restmod, $window) {
        return restmod.model('/v1/urls');
    });


};