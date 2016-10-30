(function() {
  'use strict';

  // Overview module config
  angular
    .module('overview')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
