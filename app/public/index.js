var angular = require('angular');
var uiRouter = require('angular-ui-router');
var modal = require('angular-ui-bootstrap/src/modal');

var ngModule = angular.module('ngUrlShort', [
    uiRouter,
    modal,
    'restmod'
]);

require('./config')(ngModule);
require('./components')(ngModule);