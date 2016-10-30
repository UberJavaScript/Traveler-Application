(function() {
  'use strict';

  // When module config
  angular
    .module('when')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
