angular.module('hero')
    .directive('superhero', function() {
        return {
            template: '<div>{{superheroController.greet()}}</div>',
            bindToController: {
                hero: '='
            },
            controllerAs: 'superheroController',
            controller: function() {
                this.greet = function() {
                    return 'I am ' + this.hero.name + ' and my secret identity is ' + this.hero.secretName;
                }
            }
        }
    });