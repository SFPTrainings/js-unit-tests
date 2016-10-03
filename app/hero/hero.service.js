'use strict';

angular
    .module('hero')
    .factory('HeroService', HeroService);

function HeroService($http, $q) {
    return {
        getHeroes: getHeroes
    };

    function getHeroes() {
        return $http.get('app/hero/heroes.json').then(
            function(response) {
                return response.data;
            },
            function(error) {
                return $q.reject(error.data);
            }
        );
    }
}