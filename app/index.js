'use strict';
module.exports = angular.module('app', [
    'ng',
    'ui.router',
    /* 3rd party */
    /* modules */
    // require('imports?this=>window!./modernizr-custom'),
    require('./core/layout').name,
    require('./core/common/dlmenu').name,
    require('./core/common/fancyselect').name,
    require('./core/common/isotopes').name,
    require('./core/common/isotope-width').name,
    require('./core/common/prettyPhotos').name
])
