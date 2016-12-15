(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective () {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
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
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService ($http, BasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {

      return $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
      }).then(function (response) {
        var matchedItems = [];
        var foundMenuItems = response.data.menu_items.filter(function(elem) {
          return elem.description.indexOf(searchTerm) !== -1;
        });
        return foundMenuItems;
      });

    };
  }

})();
