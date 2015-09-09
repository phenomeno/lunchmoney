angular.module('lunchmoney').controller('MainController', function($scope) {
    $scope.lm = 0;
    $scope.dollar_increment = [1, 5, 10, 100];
    
    $scope.less = function(x) {
        $scope.lm = $scope.lm - x;
    };

    $scope.add = function(x) {
        $scope.lm = $scope.lm + x;
    };
});
