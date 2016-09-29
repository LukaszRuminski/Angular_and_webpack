function HomeController (){
        this.app = require('index.json');
}
module.exports = function () {
    require('./home.scss');
    require('./../../../assets/css/responsive.css');
    require('./../../../assets/js/scrollReveal.js');
    return {
        controller: HomeController,
        controllerAs: 'home',
        templateUrl: './core/pages/home/home.html'
    };
};

