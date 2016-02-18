angular
  .controller('grouplistCtrl', loadFunction);

loadFunction.$inject = ['$scope', 'structureService', '$location'];

function loadFunction($scope, structureService, $location) {
  //Register upper level modules
  structureService.registerModule($location, $scope, "grouplist");

  var list = [];

  angular.forEach($scope.grouplist.modulescope.sections, function(value, key) {
    if (structureService.get().modules[value.replace(/#/g, '')]) {

      var name = structureService.get().modules[value.replace(/#/g, '')].name;
      var icon = structureService.get().modules[value.replace(/#/g, '')].icon;
      var bg = "";
      if($scope.grouplist.modulescope.bgs[key]){
        bg = $scope.grouplist.modulescope.bgs[key];
      }

      list.push({
        name: name,
        bg: bg,
        url: value.replace(/#/g, ''),
        icon: icon
      });
    }

  });
  $scope.grouplist.modulescope.newsections = list;
}
