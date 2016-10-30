(function() {
  'use strict';

  // Theme module config
  angular
    .module('theme')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {

  }
})();
