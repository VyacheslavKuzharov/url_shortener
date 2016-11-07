module.exports = function (ngModule) {
    ngModule.controller('rootController', rootController);

    rootController.$inject = ['rootService'];

    function rootController(rootService) {
        require('../../assets/stylesheets/main.css');

        var self = this;
        self.saveUrl = saveUrl;

        function saveUrl (url) {
            rootService.saveLongUrl(url.long_url).then(function (response) {
                console.log(response.data)
                if(response.data.status === 'error')
                    self.statusError = response.data.message
            });

        }
    }
};