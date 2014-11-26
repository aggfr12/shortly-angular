angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  angular.extend($scope, Links);
  $scope.link = {};
  $scope.addLink = function(mylink){
    Links.createNewLink(mylink)
    .then(function(data) {
      $scope.data = data;
      console.log("scope data", $scope.data);
    })
    .catch(function(err) {
      console.log("all unicorns die", err);
    });

      $location.path( '#/links' );
  };

  var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

  $scope.validateURL = function(url) {
    return url.match(rValidUrl);
  };

});
