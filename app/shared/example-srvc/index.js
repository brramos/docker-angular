(function () {
    'use strict'

    angular
        .module(module.exports = 'ExampleSrvc', [])
        .service(module.exports, require('./srvc'))

})()

