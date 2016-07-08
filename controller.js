angular
  .controller('grouplistCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', '$location'];

function loadFunction($scope, structureService, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, "grouplist");

  $scope.visualization = $scope.grouplist.modulescope.visualization || 'grid';

  var list = [];

  angular.forEach($scope.grouplist.modulescope.menuItems, function(value, key) {
    if (structureService.get().modules[value.path]) {

      var name = structureService.get().modules[value.path].name;
      var icon = structureService.get().modules[value.path].icon;

      list.push({
        name: name,
        backgroundImage: value.bgImage,
        backgroundColor: value.bgColor,
        url: value.path,
        icon: icon
      });
    }

  });
  $scope.grouplist.modulescope.newsections = list;
}
