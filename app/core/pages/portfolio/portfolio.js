function PortfolioController() {
    this.app = require('index.json');
}
module.exports = function () {
    require('./portfolio.scss');
    require('./../../../assets/js/fancySelect');
    require('./../../../assets/js/isotope.pkgd.min');
    return {
        controller: PortfolioController,
        controllerAs: 'portfolio',
        templateUrl: './core/pages/portfolio/portfolio.html'
    };
};

