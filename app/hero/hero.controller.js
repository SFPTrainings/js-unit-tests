'use strict';
angular.module('hero')
    .controller('HeroController', function($log, HeroService) {
        var self = this;
        
        self.superheroes = [];
        
        self.getHeroes = function() {
            HeroService.getHeroes().then(
                self.onHeroesSuccess,
                self.onHeroesError
            )
        };
        
        self.onHeroesSuccess = function(heroes) {
            self.superheroes = heroes;
            $log.info('Superheroes list ', self.superheroes);
        };
        
        self.onHeroesError = function(err) {
            $log.error('Error: ' + err.statusText);
            $log.error('Status: ' + err.status);
        };
    });