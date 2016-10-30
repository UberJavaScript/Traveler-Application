(function() {
  'use strict';

  angular
    .module('budget')
    .controller('BudgetController', BudgetController);

  BudgetController.$inject = ['$scope'];

  function BudgetController($scope) {
    var vm = this;

    // Budget controller logic
    // ...

    init();

    function init() {
    }
  }
})();
