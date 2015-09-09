var app = angular.module('lunchmoney', ['ui.bootstrap', 'ngAnimate']);

app.run(function($http){
    $http.defaults.withCredentials = true;
});
