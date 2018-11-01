(function () {
    "use strict";

    angular.module('public')
        .controller('SignupController', SignupController);

    SignupController.$inject = ["MenuService", "UserService"]

    function SignupController(MenuService, UserService) {
        var $ctrl = this;
        $ctrl.message = "";
        $ctrl.dishError = "";
        $ctrl.signup = function () {
            if(!$ctrl.dishError){
                $ctrl.message = "Your information has been saved";
                UserService.setUserInfo($ctrl.user);
            }
            else {
                $ctrl.message = "";
            }
        };

        $ctrl.checkMenuItem = function () {
            MenuService.getMenuItem($ctrl.user.favDish)
                .then(function (response) {
                    $ctrl.dishError = "";
                })
                .catch(function (errorResponse) {
                    $ctrl.dishError = "No such menu number exists";
                });
                console.log($ctrl.dishError);
        }
    }

})();