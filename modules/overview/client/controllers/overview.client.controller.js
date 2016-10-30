(function() {
  'use strict';

  angular
    .module('overview')
    .controller('OverviewController', OverviewController);

  OverviewController.$inject = ['$scope'];

  function OverviewController($scope) {
    var vm = this;

    // Overview controller logic
    // ...

    init();

    function init() {
    }
  }
})();
