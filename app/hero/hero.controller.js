'use strict';
angular.module('hero')
    .controller('HeroController', function($http, $log) {
        var self = this;
        self.superheroes = [];
        self.getHeroes = function() {
            $http.get('app/hero/heroes.json').then(
                self.onHeroesSuccess,
                self.onHeroesError
            )
        };
        self.onHeroesSuccess = function(result) {
            self.superheroes = result.data;
            $log.info('Superheroes list ', self.superheroes);
        };
        self.onHeroesError = function(err) {
            $log.error('Error: ' + err.statusText)
            $log.error('Status: ' + err.status);
            $log.error('Data: ' + err.data);
        };
    });