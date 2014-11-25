angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getAllLinks()
    .then(function(data) {
      $scope.data.links = data;
    })
    .catch(function(err) {
    });
  };
  $scope.getLinks();

  $scope.findURL = function(code){
    console.log(code);

  };
});

