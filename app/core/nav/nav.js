class NavCtrl {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./nav.scss');
    return {
        controller: NavCtrl,
        controllerAs: 'nav',
        templateUrl: './core/nav/nav.html'
    };
};