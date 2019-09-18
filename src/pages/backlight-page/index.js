angular
    .module(module.exports = 'backlightPage', [])
    .component(module.exports, {
        template: require('./backlight-page.template.html'),
        controller: require('./backlight-page.controller')
    });
