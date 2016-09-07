export class HomeController {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./home.scss');
    require('./../../../assets/css/responsive.css');
    require('./../../../assets/js/scrollReveal.js');
    return {
        controller: HomeController,
        controllerAs: 'home',
        templateUrl: './core/pages/home/home.html'
    };
};

