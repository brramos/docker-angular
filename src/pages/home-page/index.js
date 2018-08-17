angular
    .module(module.exports = 'homePage', [])
    .component(module.exports, {
        template: require('./home-page.template.html'),
        controller: require('./home-page.controller')
    })
