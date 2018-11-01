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
            MenuService.getMenuItem($ctrl.user.favDish)
                .then(function (response) {
                    $ctrl.message = "Your information has been saved";
                    $ctrl.dishError = "";
                    UserService.setUserInfo($ctrl.user);
                })
                .catch(function (errorResponse){
                    $ctrl.message = "";
                    $ctrl.dishError = "No such menu number exists";
                });
        };
    }

})();