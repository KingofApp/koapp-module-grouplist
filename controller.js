(function() {
  angular
    .controller('grouplistCtrl', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, "grouplist");

    $scope.separation = $scope.grouplist.modulescope.separation || '0px';


    var list = [];

    angular.forEach($scope.grouplist.modulescope.menuItems, function(value, key) {
      if (structureService.get().modules[value.path]) {

        var name = structureService.get().modules[value.path].name;
        var icon = structureService.get().modules[value.path].icon;

        list.push({
          name: name,
          description: value.description,
          backgroundImage: value.bgImage,
          backgroundColor: value.bgColor,
          url: value.path,
          icon: icon
        });
      }
    });
    $scope.list = list;
  }
}());
