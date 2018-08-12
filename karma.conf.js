// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
        //  Angular and Angular Mocks
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',

        //  Templates
        'app/**/tpl.html',


        //  Tests
        'app/**/spec.js'

    ],
    exclude: [],
    preprocessors: {
        'app/**/*.js':['browserify']
    },
    browserify: {
        paths: ['./node_modules', './app'],
        transform: ['stringify']
    },
    stringify: {
        appliesTo: { includeExtensions: ['.html'] },
        minify: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
