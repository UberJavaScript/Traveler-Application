(function() {
  'use strict';

  angular
    .module('preferrences')
    .controller('PreferrencesController', PreferrencesController);

  PreferrencesController.$inject = ['$scope'];

  function PreferrencesController($scope) {
    var vm = this;

    // Preferrences controller logic
    // ...

    init();

    function init() {
    }
  }
})();
