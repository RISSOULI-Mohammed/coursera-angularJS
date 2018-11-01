(function () {
    "use strict";

    angular.module('public')
        .service('UserService', UserService);

    UserService.$inject = ["MenuService"]

    function UserService(MenuService) {
        var service = this;
        service.userInfo = {
            registred: false
        };
        service.setUserInfo = function (user) {
            service.userInfo = user;
            service.userInfo.registred = true;
        };
        service.getUserInfo = function () {
            MenuService.getMenuItem(service.userInfo.favDish)
                .then(function (response) {
                    service.userInfo.favDishDetails = response;
                })
            return service.userInfo;
        };
    }

})();