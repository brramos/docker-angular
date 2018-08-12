(function () {
    'use strict'

    angular
        .module(module.exports = 'welcomePage', [])
        .component(module.exports, {
            template: require('./welcome-page.template.html'),
            controller: require('./welcome-page.controller')
        })

})()
