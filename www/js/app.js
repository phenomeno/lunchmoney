var app = angular.module('lunchmoney', ['ui.bootstrap', 'ngAnimate', 'ngRoute']);

app.run(function($http){
    $http.defaults.withCredentials = true;
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    });
    /*
    .otherwise({
        redirectTo: '/'
    });*/
});
