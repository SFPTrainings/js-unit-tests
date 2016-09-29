'use strict';

describe('Hero controller testing', function() {
    var heroController;
    var $httpBackend;
    var heroes = [
        {
            "name": "Batman",
            "secretName": "Bruce Wayne"
        }, {
            "name": "Superman",
            "secretName": "Clark Kent"
        }, {
            "name": "Wonder Woman",
            "secretName": "Diana Prince"
        }
    ];
    beforeEach(module('hero'));
    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        heroController = _$controller_('HeroController');
    }));
    it('should initialize controller', function() {
        assert(heroController.superheroes.length === 0, 'default list of superheroes must be empty');
    });
    it('should get the list of superheroes', function() {
        $httpBackend.expectGET('app/hero/heroes.json').respond(200, heroes);
        heroController.getHeroes();
        $httpBackend.flush();
        assert.deepEqual(heroController.superheroes, heroes);
    });
    it('should test heroes success callback', function() {
        heroController.onHeroesSuccess({data: heroes});
        assert.deepEqual(heroController.superheroes, heroes);
    });
    it('should test heroes error callback', function() {
        var error = {
            status: 404,
            statusText: 'Page not found',
            data: 'Could not load file.js'
        }
        
        heroController.onHeroesError(error);
    });
});