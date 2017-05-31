function OfferController () {
        this.app = require("index.json");
}
module.exports = function(){
    require("./offer.scss");

    return {
        controller: OfferController,
        controllerAs: "offer",
        templateUrl: "./core/pages/offer/offer.html"
    };
}

