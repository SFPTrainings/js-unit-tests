'use strict';

describe('Hero service testing', function() {
    var $httpBackend;
    var HeroService;

    beforeEach(module('hero'));

    beforeEach(inject(function(_$httpBackend_, _HeroService_){
        $httpBackend = _$httpBackend_;
        HeroService = _HeroService_;
    }));

    describe('getHeroes', function() {
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
        var error = {
            status: 404,
            statusText: 'Page not found'
        };

        it('should hit app/hero/heroes.json and return heroes', function() {
            $httpBackend.expect('GET', 'app/hero/heroes.json').respond(200, heroes);
            HeroService.getHeroes().then(function(data) {
                assert.deepEqual(data, heroes, 'should return heroes');
            });
            $httpBackend.flush();
        });

        it('should hit app/hero/heroes.json and return an error', function() {
            $httpBackend.expect('GET', 'app/hero/heroes.json').respond(404, error);
            HeroService.getHeroes().then(
                function() {
                    assert(false, 'should have gone on error callback')
                },
                function(err){
                    assert.deepEqual(err, error, 'should have gotten error');
                }
            );
            $httpBackend.flush();
        });
    });
});