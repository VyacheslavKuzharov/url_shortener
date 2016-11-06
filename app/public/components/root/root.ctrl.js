module.exports = function (ngModule) {
    ngModule.controller('rootController', rootController);

    rootController.$inject = ['$uibModal'];

    function rootController($uibModal) {
        var self = this;
        self.openModal = openModal;

        self.message = 'This from angular Ctrl';

        function openModal() {
            $uibModal.open({
                animation: true,
                template: require('./modal.html')
            });
        }
    }
};