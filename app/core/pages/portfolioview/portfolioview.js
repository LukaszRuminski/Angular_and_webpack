function PortfolioItemController($scope, $log) {
    this.app = require("index.json");
    $scope.items = this.app.works;
    $log.info("dupa");
    $scope.currentPage = $state.params.itemID;
}
module.exports = function () {
    require("./portfolioview.scss");

    return {
        controller: PortfolioItemController,
        controllerAs: "portfolioview",
        templateUrl: "./core/pages/portfolioview/portfolioview.html"
    };
};

