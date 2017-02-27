module.exports = function () {

    /* Styles */
    require('../index.scss');

    /* JS */
    global.$ = global.jQuery = require('../assets/js/jquery-2.1.0.min');
    // require('../template/js/jquery-ui');
    require('sizzle');
    require('angular');
    require('angular-ui-router');
    require('ngmap');
    require('ng-dialog');
    require('../assets/js/main.js');
    global.classie = require('classie');
    global.scrollReveal = require('../assets/js/scrollReveal');
    require('../assets/js/waypoints.min');
    require('../assets/js/jquery.dlmenu');
};