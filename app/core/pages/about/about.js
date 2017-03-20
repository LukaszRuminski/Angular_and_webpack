function AboutController() {
    this.app = require('index.json');
}
module.exports = function () {
    require('./about.scss');
    require('./../../../assets/js/scrollReveal.js');
    return {
        controller: AboutController,
        controllerAs: 'about',
        templateUrl: './core/pages/about/about.html'
    };
};

