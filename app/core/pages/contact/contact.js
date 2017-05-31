function ContactController(NgMap) {
    this.app = require("index.json");

    var vm = this;
    NgMap.getMap().then(function (map) {
        vm.map = map;
    });
}
module.exports = function(){
    require("./contact.scss");

    return {
        controller: ContactController,
        controllerAs: "contact",
        templateUrl: "./core/pages/contact/contact.html"
    };
};

