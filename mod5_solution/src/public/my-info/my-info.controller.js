(function () {
    "use strict";

    angular.module('public')
        .controller('MyinfoController', MyinfoController);

    MyinfoController.$inject = ['userInfo', 'ApiPath'];

    function MyinfoController(userInfo, ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;
        $ctrl.userInfo = userInfo;
    }
})();