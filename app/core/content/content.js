function ContentCtrl () {
    this.app = require('index.json');
}
module.exports = function() {
    require('./content.scss');
    return {
        controller: ContentCtrl,
        controllerAs: 'content',
        template: require('./content.html')
    };
};
