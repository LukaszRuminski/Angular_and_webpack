export class ContentCtrl {
    constructor() {
        this.app = require('index.json');
    }
}
module.exports = () => {
    require('./content.scss');
    return {
        controller: ContentCtrl,
        controllerAs: 'content',
        template: require('./content.html')
    };
};
