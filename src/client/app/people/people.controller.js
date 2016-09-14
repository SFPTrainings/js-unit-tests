(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['$state', '$q', 'dataservice', 'logger'];
  /* @ngInject */
  function PeopleController($state, $q, dataservice, logger) {
    var vm = this;

    vm.people = [];
    vm.goToPerson = goToPerson;

    getPeople();

    function getPeople() {
      dataservice.getPeople()
        .then(function(response){
          vm.people = response;
        });
    }

    function goToPerson(person) {
      $state.go('person', {
        id: person.id
      });
    }
  }
})();
