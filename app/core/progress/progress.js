class ProgressBarCtrl {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./progress.scss');
    return {
        controller: ProgressBarCtrl,
        controllerAs: 'progress',
        templateUrl: './core/progress/progress.html'
    };
};