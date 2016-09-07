export class PortfolioController {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./portfolio.scss');
    require('./../../../assets/css/responsive.css');
    require('./../../../assets/js/fancySelect');
    require('./../../../assets/js/isotope.pkgd.min');
    return {
        controller: PortfolioController,
        controllerAs: 'portfolio',
        templateUrl: './core/pages/portfolio/portfolio.html'
    };
};

