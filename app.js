// MODULE
var angularApp = angular.module('angularApp', [
  'ngMessages',
  'ngResource',
]);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$filter',
  '$http',
  function ($scope, $filter, $http) {
    $scope.handle = '';

    $scope.lowerCaseHandle = function () {
      return $filter('lowercase')($scope.handle);
    }

    $scope.characters = 5;

    /*
    $scope.rules = [
      { rulename: "Must be 5 characters" },
      { rulename: "Must not be used elsewhere" },
      { rulename: "Must be cool" },
    ];
     */
    $http.get('/api')
      .success(function(result) {
        $scope.rules = result;
      })
      .error(function(data, status) {
        console.error(data);
      })

    $scope.newRule = '';

    $scope.addRule = function() {
        $http.post('/api', { newRule: $scope.newRule })
          .success(function(result) {
            $scope.rules = result;
            $scope.newRule = '';
          })
          .error(function(data, status) {
            console.error(data);
          })
    };
  },
]);
