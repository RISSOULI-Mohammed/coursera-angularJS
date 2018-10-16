(function () {
    'use strict';
    angular.module("NarrowItDownApp", [])
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .directive("foundItems", FoundItemsDirective)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function FoundItemsDirective() {
        var ddo = {
            restrict: "E",
            templateUrl: 'foundItems.html',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function foundItemsDirectiveController(){
        var list = this
    }

    NarrowItDownController.$inject = ["MenuSearchService"];

    function NarrowItDownController(MenuSearchService) {
        var narrow = this;
        narrow.getMatchedMenuItems = function () {
            MenuSearchService.getMatchedMenuItems(narrow.searchTerm)
                .then(function (result) {
                    narrow.found = result
                });
        };
        narrow.removeItem = function(index){
            narrow.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ["$http", "ApiBasePath"]

    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {
                var foundItems = [];
                var items = result.data["menu_items"];
                for (var i = 0; i < items.length; i++) {
                    if (items[i]["description"].indexOf(searchTerm) !== -1) {
                        foundItems.push(items[i]);
                    }
                }
                return foundItems;
            });
        };
    }

})();