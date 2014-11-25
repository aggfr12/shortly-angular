angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  angular.extend($scope, Links);
  $scope.link = Links.holder;
  $scope.addLink = function(mylink){
    Links.createNewLink(mylink)
    .then(function(data) {
      $scope.data = data;
      console.log("scope data", $scope.data);
    })
    .catch(function(err) {
      console.log("all unicorns die", err);
    });
  };
  $scope.addLink();

});
