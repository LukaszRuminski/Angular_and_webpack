export class PortfolioController {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./portfolio.scss');
    require('./../../../template/css/responsive.css');
    require('./../../../template/js/fancySelect');
    require('./../../../template/js/isotope.pkgd.min');
    null
    return {
        controller: PortfolioController,
        controllerAs: 'portfolio',
        templateUrl: './core/pages/portfolio/portfolio.html'
    };
};

