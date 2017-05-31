function ContactController(NgMap) {
    this.app = require('index.json');

    var vm = this;
    NgMap.getMap().then(function (map) {
        vm.map = map;
    });
    vm.customIcon = {
        "url": "assets/placeholders/GD_logo_menu.png#white",
        // "path": "M22-48h-44v43h16l6 5 6-5h16z",
        "scaledSize": [32, 32]
    };
}
module.exports = function(){
    require('./contact.scss');

    return {
        controller: ContactController,
        controllerAs: 'contact',
        templateUrl: './core/pages/contact/contact.html'
    };
};

