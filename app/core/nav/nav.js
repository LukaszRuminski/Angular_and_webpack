export class NavCtrl {
    constructor() {
        this.app = require('index.json');

    }

}
module.exports = () => {
    require('./nav.scss');
    // require('./show-menu')
    return {
        controller: NavCtrl,
        controllerAs: 'nav',
        templateUrl: './core/nav/nav.html'
    };
};

