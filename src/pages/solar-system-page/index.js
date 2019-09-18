angular
    .module(module.exports = 'solarSystemPage', [])
    .component(module.exports, {
        template: require('./solar-system-page.template.html'),
        controller: require('./solar-system-page.controller')
    });
