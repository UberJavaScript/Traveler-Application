(function () {
  'use strict';

  //Setting up route
  angular
    .module('when')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // When state routing
    $stateProvider
      .state('when', {
        url: '/when',
        templateUrl: 'modules/when/client/views/when.client.view.html',
          data : { pageTitle: 'When' },
        controller: 'WhenController',
        controllerAs: 'vm'
      });
  }
})();
