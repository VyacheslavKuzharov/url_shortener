module.exports = function (ngModule) {
    ngModule.directive('toolbar', toolbar);

    function toolbar() {
        require('../../assets/stylesheets/toolbar.css');
        return {
            restrict: 'E',
            template: require('../toolbar/toolbar.tpl.html'),
            scope: {},
            controller: toolbarController,
            controllerAs: 'toolbarCtrl'
        };

        function toolbarController() {
            var self = this;

            self.greet = 'Directive works!'

        }
    }
};