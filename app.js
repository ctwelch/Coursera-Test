(function () {
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownContoller)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective)
  .constant('BaseBath', "https://davids-restaurant.herokuapp.com");

  function FoundItemsDirective () {
    var ddo = {
      templateUrl : 'foundItems.html',
      scope : {
        foundItems : '<',
        onRemove : '&'
      },
      controller : FoundItemsDirectiveController,
      controllerAs : 'foundList',
      bindToController : 'true'
    };

    return ddo;
  }

  function FoundShoppingListDirectiveController () {
    var foundList = this;


  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.searchTerm = "";

    menu.findMatchedItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

      promise.then(function (response) {
        menu.foundItems = response.data;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    };

  }

  MenuSearchService.$inject = ['$http', 'BasePath'];
  function MenuSearchService ($http, BasePath) {
  var service = this;

  service.getMatchedMenuItems(searchTerm) {
    return $http({
      method: "GET",
      url: (BasePath + "/menu_items.json")

      }).then(function (response) {
        var data = response.data;
        var matchedItems = [];

        for(var i = 0; i < data.menu_items.length; i++){
          if(data.menu_items[i].description.indexOf(searchTerm) > 0){
            matchedItems.push(allItems[i]);
          }
        }

        return matchedItems;
      });
    }

    service.removeItem = function (itemIndex) {
      matchedItems.splice(itemIndex, 1);
    };
  };


})();
