(function () {
  'use strict';

  //Setting up route
  angular
    .module('where')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Where state routing
    $stateProvider
      .state('where', {
        url: '/where',
        templateUrl: 'modules/where/client/views/where.client.view.html',
          data : { pageTitle: 'Where' },
        controller: 'WhereController',
        controllerAs: 'vm'
      });
  }
})();
