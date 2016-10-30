(function () {
  'use strict';

  //Setting up route
  angular
    .module('budget')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Budget state routing
    $stateProvider
      .state('budget', {
        url: '/budget',
        templateUrl: 'modules/budget/client/views/budget.client.view.html',
          data : { pageTitle: 'Budget' },
        controller: 'BudgetController',
        controllerAs: 'vm'
      });
  }
})();
