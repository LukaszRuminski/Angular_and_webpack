function ContactController () {
    this.app = require('index.json');
    (function(NgMap) {
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });
    }())
}
module.exports = function(){
    require('./contact.scss');
    require('ng-map.min.js');

    return {
        controller: ContactController,
        controllerAs: 'contact',
        templateUrl: './core/pages/contact/contact.html'
    };
}

