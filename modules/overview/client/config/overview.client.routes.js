(function () {
  'use strict';

  //Setting up route
  angular
    .module('overview')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Overview state routing
    $stateProvider
      .state('overview', {
        url: '/overview',
        templateUrl: 'modules/overview/client/views/overview.client.view.html',
          data : { pageTitle: 'Overview' },
        controller: 'OverviewController',
        controllerAs: 'vm'
      });
  }
})();
