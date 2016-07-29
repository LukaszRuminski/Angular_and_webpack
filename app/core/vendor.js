
module.exports = function () {

    /* Styles */
    require('../index.scss');
    require('../../node_modules/mdi/css/materialdesignicons.min.css');
    require('../../node_modules/node-lumx/dist/scss/_lumx.scss');
    /* JS */
    global.$ = global.jQuery = require('jquery');
    require('velocity-animate');
    require('angular');
    require('angular-route');
    global.moment = require('moment');
    require('node-lumx');
};