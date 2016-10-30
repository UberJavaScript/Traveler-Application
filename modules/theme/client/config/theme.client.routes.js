(function () {
  'use strict';

  //Setting up route
  angular
    .module('theme')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    // Theme state routing
    $stateProvider
      .state('theme', {
        url: '/theme',
        templateUrl: 'modules/theme/client/views/theme.client.view.html',
          data : { pageTitle: 'Theme' },
        controller: 'ThemeController',
        controllerAs: 'vm'
      });

  }
})();
