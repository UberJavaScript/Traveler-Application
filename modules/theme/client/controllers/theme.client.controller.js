(function() {
  'use strict';

  angular
    .module('theme')
    .controller('ThemeController', ThemeController);

  ThemeController.$inject = ['$scope'];

  function ThemeController($scope) {
    var vm = this;
      $scope.maxItem = 5;
      $scope.max = 100;
      $scope.choose = 20;
      $scope.dynamic = 0;
      $scope.progress = function() {
        if($scope.dynamic === 100){
            $scope.dynamic = 100;
           
        } else{
           $scope.dynamic = $scope.dynamic + $scope.choose;
            $scope.selected = $scope.choose;
        }                 
        
        

          
      }
    init();

    function init() {
    }
  }
})();
