angular.module('shortly.services', [])

.factory('Links', function ($http) {
  var holder = {};

  var getAllLinks = function() {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function(res){
      console.log('PROMISE COMPLETE!!!!!');
      return res.data;
    });
  };

  var findURL = function(code) {
    return $http({
      method: 'GET',
      url: '/api/links/' + code
    })
    .then(function(res){
      console.log('PROMISE COMPLETE!!!!!');
      return res.data;
    });
  }

  var createNewLink = function(link) {
      console.log("link in create new link", link);

    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: link}
    })
    .then(function(res){
      console.log("post complete");
      return res.data;
    });
  };

  return {
    holder: holder,
    getAllLinks: getAllLinks,
    createNewLink: createNewLink,
    findURL: findURL
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
