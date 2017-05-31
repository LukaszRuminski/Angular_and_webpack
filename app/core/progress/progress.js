function ProgressBarCtrl () {
        this.app = require('index.json');
}
module.exports = function() {
    require('./progress.scss');
    return {
        controller: ProgressBarCtrl,
        controllerAs: 'progress',
        templateUrl: './core/progress/progress.html'
    };
};