(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownContoller)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('BaseBath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective () {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'foundList',
      bindToController: true
    };
    return ddo;
  }

  function FoundItemsDirectiveController () {
    var foundList = this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController (MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.findMatchedItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (response) {
        menu.foundItems = response;
      });
    };

    menu.removeItem = function (index) {
      menu.foundItems.splice(index,1);
    }
  }

  MenuSearchService.$inject = ['$http', 'BasePath'];
  function MenuSearchService ($http, BasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var promise = $http({
      method: "GET",
      url: (BasePath + "/menu_items.json")
    });

      return promise.then(function (response) {
        var menuItems = response.data.menu_items;
        var matchedItems = [];

        for(var i = 0; i < menuItems.length; i++){
          if(menuItems[i].description.indexOf(searchTerm) !== -1){
            matchedItems.push(menuItems[i]);
          }
        }

        return matchedItems;
      });
    };
  }

})();
