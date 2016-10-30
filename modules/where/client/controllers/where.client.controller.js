(function() {
  'use strict';

  angular
    .module('where')
    .controller('WhereController', WhereController);

  WhereController.$inject = ['$scope'];

  function WhereController($scope) {
    var vm = this;

    // Where controller logic
    // ...

    init();

    function init() {
    }
  }
})();
