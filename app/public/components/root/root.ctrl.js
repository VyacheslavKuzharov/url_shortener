module.exports = function (ngModule) {
    ngModule.controller('rootController', rootController);

    rootController.$inject = [];

    function rootController() {
        require('../../assets/stylesheets/main.css');
    }
};