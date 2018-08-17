module.exports = ['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<home-page></home-page>'
            })
            .when('/welcome', {
                template: '<welcome-page></welcome-page>'
            })
            .when('/oops', {
                template: '<error-page></error-page>'
            })
            .otherwise({
                redirectTo: '/oops'
            });

        $locationProvider.html5Mode(true);

    }];