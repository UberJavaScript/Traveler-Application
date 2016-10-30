(function() {
  'use strict';

  // Budget module config
  angular
    .module('budget')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    // Config logic
    // ...
  }
})();
