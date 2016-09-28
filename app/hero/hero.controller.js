angular.module('hero')
    .controller('HeroController', function($http, $log) {
        this.superheroes = [];
        var self = this;
        this.getHeroes = function() {
            $http.get('app/hero/heroes.json').then(
                this.onHeroesSuccess,
                this.onHeroesError
            )
        };
        this.onHeroesSuccess = function(result) {
            self.superheroes = result.data;
            $log.info('Superheroes list ', self.superheroes);
        }
        this.onHeroesError = function(err) {
            $log.error('Error: ' + err.statusText)
            $log.error('Status: ' + err.status);
            $log.error('Data: ' + err.data);
        }
    });