(function () {
    'use strict';
    angular.module("LunchCheck", [])
    .controller("lunchCheckController", lunchCheckController);
    lunchCheckController.$inject = ['$scope'];
    function lunchCheckController($scope) {
        $scope.items = "";
        $scope.message = "";
        $scope.color = "";
        $scope.bcolor = "";
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
                $scope.color = "red";
                $scope.bcolor = "red";
            } else if (count < 4) {
                $scope.message = "Enjoy!";
                $scope.color = "green";
                $scope.bcolor = "green";
            } else {
                $scope.message = "Too much!";
                $scope.color = "green";
                $scope.bcolor = "green";
            }
        }
    }
})();