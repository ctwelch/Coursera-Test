(function(){
  'use strict';

  angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('BoughtController', BoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;

    toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    toBuyCtrl.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

  };

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;

    boughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [];
    var itemsBought = [];

  service.buyItem = function (itemIndex) {
     var itemBought = itemsToBuy.splice(itemIndex, 1);
     itemsBought.push(itemBought[0]);
   };

   service.getItemsToBuy = function() {
     return itemsToBuy;
   };

   service.getBoughtItems = function () {
     return itemsBought;
   };

   itemsToBuy = [
     {
       name: "Cookies",
       quantity: 1
     },
     {
       name: "Chips",
       quantity: 1
     },
     {
       name: "Soda",
       quantity: 1
     },
     {
       name: "Dip",
       quantity: 1
     },
     {
       name: "Bacon",
       quantity: 1
     },
   ];

  }
})();
