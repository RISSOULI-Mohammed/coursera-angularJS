(function () {
    'use strict';
    angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

    ToBuyController.$inject = ["ShoppingListCheckOffService"];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.toBuyItems;
        toBuy.bought = function(index){
            ShoppingListCheckOffService.bought(index);
        };
    }

    AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.boughtItems;
    }

    function ShoppingListCheckOffService(){
        var service = this;
        service.toBuyItems = [
            {quantity: 10, name: "cookies"},
            {quantity: 15, name: "milk"},
            {quantity: 2, name: "jus"},
            {quantity: 4, name: "orange"},
            {quantity: 20, name: "candy"},
            {quantity: 25, name: "apple pie"},
            {quantity: 16, name: "berry pie"},
            {quantity: 1, name: "red wine"},
        ];
        service.boughtItems = [];
        service.bought = function(index){
            service.boughtItems.push(service.toBuyItems[index]);
            service.toBuyItems.splice(index, 1);
        };
    }

})();