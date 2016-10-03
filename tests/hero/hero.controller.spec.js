'use strict';

describe('Hero controller testing', function() {
    var heroController;
    var $httpBackend;
    var $log;
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

    beforeEach(inject(function(_$controller_, _$httpBackend_, _$log_) {
        $httpBackend = _$httpBackend_;
        $log = _$log_;
        heroController = _$controller_('HeroController');
    }));

    it('should initialize controller', function() {
        assert(heroController.superheroes.length === 0, 'default list of superheroes must be empty');
    });
    describe('getHeroes', function() {
        var error = {
            status: 404,
            statusText: 'Page not found',
        };

        it('should call onHeroesSuccess', function() {
            var onHeroesSuccessSpy = sinon.spy(heroController, 'onHeroesSuccess');
            $httpBackend.expectGET('app/hero/heroes.json').respond(200, heroes);
            heroController.getHeroes();
            $httpBackend.flush();

            assert(heroController.onHeroesSuccess.calledOnce);
            assert(heroController.onHeroesSuccess.calledWithMatch({data: heroes}));
            onHeroesSuccessSpy.restore();
        });

        it('should call onHeroesError', function() {
            var onHeroesErrorSpy = sinon.spy(heroController, 'onHeroesError');
            $httpBackend.expect('GET', 'app/hero/heroes.json').respond(404, error);
            heroController.getHeroes();
            $httpBackend.flush();

            assert(heroController.onHeroesError.calledOnce);
            assert(heroController.onHeroesError.calledWithMatch({data: error}));

            onHeroesErrorSpy.restore();
        });

        it('should test heroes success callback', function() {
            var logInfoSpy = sinon.spy($log, 'info');
            heroController.onHeroesSuccess({data: heroes});

            assert.deepEqual(heroController.superheroes, heroes);
            assert.deepEqual($log.info.getCall(0).args[1], heroController.superheroes);

            logInfoSpy.restore();
        });

        it('should test heroes error callback', function() {
            var logErrorSpy = sinon.spy($log, 'error');
            heroController.onHeroesError(error);

            assert($log.error.calledTwice);
            assert.match($log.error.getCall(0).args[0], new RegExp(error.statusText));
            assert.match($log.error.getCall(1).args[0], new RegExp(error.status.toString()));

            logErrorSpy.restore();
        });
    });
});