module.exports = function (ngModule) {
    require('./toolbar/toolbar.directive.js')(ngModule);
    require('./root/root.ctrl')(ngModule);
};