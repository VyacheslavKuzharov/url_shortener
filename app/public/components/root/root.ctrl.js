module.exports = function (ngModule) {
    ngModule.controller('rootController', rootController);

    rootController.$inject = ['rootService'];

    function rootController(rootService) {
        require('../../assets/stylesheets/main.css');

        var self = this;
        self.saveUrl = saveUrl;

        function saveUrl (url) {
            rootService.saveLongUrl(url.long_url).then(function (response) {
                if(response.data.status === 'error')
                    return self.statusError = response.data.message;


                self.statusError = false;
                self.validUrl = response.data.data;
            });

        }
    }
};