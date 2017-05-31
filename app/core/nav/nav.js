function NavCtrl (){
        this.app = require('index.json');
}
module.exports = function() {
    require('./nav.scss');
    // require('./show-menu')
    return {
        controller: NavCtrl,
        controllerAs: 'nav',
        templateUrl: './core/nav/nav.html'
    };
};

