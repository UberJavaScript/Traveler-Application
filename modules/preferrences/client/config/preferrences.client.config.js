(function() {
  'use strict';

  // Preferrences module config
  angular
    .module('preferrences')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
