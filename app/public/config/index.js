module.exports = function (ngModule) {
    require('./app.config')(ngModule);
    require('./app.state')(ngModule);
};