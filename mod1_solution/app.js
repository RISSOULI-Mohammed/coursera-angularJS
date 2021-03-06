(function () {
    'use strict';
    angular.module("LunchCheck", [])
    .controller("lunchCheckController", lunchCheckController);
    lunchCheckController.$inject = ['$scope'];
    function lunchCheckController($scope) {
        $scope.items = "";
        $scope.message = "";
        $scope.check = function(){
            var arr = $scope.items.split(",");
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].trim().length > 0) {
                    count++;
                }
            }
            if (count == 0) {
                $scope.message = "Please enter data first";
            } else if (count < 4) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }
})();