function PortfolioItemController() {
    this.app = require('index.json');
}
module.exports = function () {
    require('./portfolioview.scss');

    return {
        controller: PortfolioItemController,
        controllerAs: 'portfolioview',
        templateUrl: './core/pages/portfolioview/portfolioview.html'
    };
};

