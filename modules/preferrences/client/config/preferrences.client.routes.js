(function () {
  'use strict';

  //Setting up route
  angular
    .module('preferrences')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Preferrences state routing
    $stateProvider
      .state('preferrences', {
        url: '/preferrences',
        templateUrl: 'modules/preferrences/client/views/preferrences.client.view.html',
          data : { pageTitle: 'Preferrences' },
          controller: 'PreferrencesController',
        controllerAs: 'vm'
      });
  }
})();
