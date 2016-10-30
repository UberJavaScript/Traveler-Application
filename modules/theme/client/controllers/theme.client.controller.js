(function() {
  'use strict';

  angular
    .module('theme')
    .controller('ThemeController', ThemeController);

  ThemeController.$inject = ['$scope'];

  function ThemeController($scope) {
    var vm = this;

      $scope.max = 100;
      $scope.dynamic = 10;
      $scope.progress = function() {
          $scope.dynamic = $scope.dynamic + 10;
      }
    init();

    function init() {
    }
  }
})();
