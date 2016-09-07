export class AboutController {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./about.scss');
    require('./../../../assets/css/responsive.css');
    return {
        controller: AboutController,
        controllerAs: 'portfolio',
        templateUrl: './core/pages/about/about.html'
    };
};

