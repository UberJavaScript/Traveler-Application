(function() {
  'use strict';

  // Where module config
  angular
    .module('where')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
