module.exports = function (ngModule) {
    ngModule.controller('rootController', rootController);

    rootController.$inject = ['$window', 'Url'];

    function rootController($window, Url) {
        require('../../assets/stylesheets/main.css');

        var self = this;
        // self.saveUrl = saveUrl;
        // self.detectUsage = detectUsage;

        // function saveUrl (url) {
        //     rootService.saveLongUrl(url.long_url).then(function (response) {
        //         if(response.data.status === 'error')
        //             return self.statusError = response.data.message;
        //
        //
        //         self.statusError = false;
        //         self.validUrl = response.data.data;
        //     });
        //
        // }

        // function detectUsage(url) {
        //     $window.location.href = url
        // }



        var urls = Url.$collection().$refresh();

        console.log(urls)
    }
};