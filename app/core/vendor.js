module.exports = function () {

    /* Styles */
    require('../index.scss');

    /* JS */
    global.$ = global.jQuery = require('../template/js/jquery-1.10.2.min');
    // require('../template/js/jquery-ui');
    require('sizzle');
    require('angular');
    require('angular-ui-router');
    require('ng-dialog');
    require('../template/js/main.js');
    global.classie = require('classie');
    require('../template/js/waypoints.min');
    require('../template/js/jquery.dlmenu');
};