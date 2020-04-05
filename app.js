// MODULE
var angularApp = angular.module('angularApp', [
  'ngMessages',
  'ngResource',
]);

// CONTROLLERS
angularApp.controller('mainController', [
  '$scope',
  '$filter',
  function ($scope, $filter) {
    $scope.handle = '';
    $scope.lowerCaseHandle = function () {
      return $filter('lowercase')($scope.handle)
    }
  },
]);
