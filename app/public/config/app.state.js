module.exports = function (ngModule) {

    ngModule
        .config([
            '$stateProvider',
            '$locationProvider',
            '$urlRouterProvider', function(
                $stateProvider,
                $locationProvider,
                $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');
                $locationProvider.html5Mode(true);

                $stateProvider
                    .state('root', {
                        url: '/',
                        template: require('../components/root/root.tpl.html'),
                        controller: 'rootController',
                        controllerAs: 'rootCtrl'
                    });
            }]);
};