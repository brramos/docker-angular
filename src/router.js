module.exports = ['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {template: '<home-page></home-page>'})
            .when('/welcome', {template: '<welcome-page></welcome-page>'})
            .when('/oops', {template: '<error-page></error-page>'})
            .when('/button', {template: '<button-page></button-page>'})
            .when('/hover-button', {template: '<hover-button-page></hover-button-page>'})
            .when('/text-in-border', {template: '<text-in-border-page></text-in-border-page>'})
            .when('/card-effect', {template: '<card-effect-page></card-effect-page>'})
            .when('/article-tiles', {template: '<article-tiles-page></article-tiles-page>'})
            .when('/backlight', {template: '<backlight-page></backlight-page>'})
            .when('/pixie-dust', {template: '<pixie-dust-page></pixie-dust-page>'})
            .when('/header-animation', {template: '<header-animation-page></header-animation-page>'})
            .when('/solar-system', {template: '<solar-system-page></solar-system-page>'})
            .otherwise({redirectTo: '/oops'});

        $locationProvider.html5Mode(true);
    }];
