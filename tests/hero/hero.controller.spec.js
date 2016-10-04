'use strict';

describe('Hero controller testing', function() {
    var heroController;
    var HeroService;
    var $log;
    var $rootScope;
    var $q;

    beforeEach(module('hero'));

    beforeEach(inject(function(_$controller_, _$log_, _$q_, _$rootScope_, _HeroService_) {
        $log = _$log_;
        $q = _$q_;
        $rootScope = _$rootScope_;
        HeroService = _HeroService_;
        heroController = _$controller_('HeroController');
    }));

    it('should initialize controller', function() {
        assert(heroController.superheroes.length === 0, 'default list of superheroes must be empty');
    });

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

        it('should call onHeroesSuccess', function() {
            var getHeroesStub = sinon.stub(HeroService, 'getHeroes', function() { return $q.when(heroes) });
            var onHeroesSuccessSpy = sinon.spy(heroController, 'onHeroesSuccess');

            heroController.getHeroes();
            $rootScope.$apply();

            assert(heroController.onHeroesSuccess.calledOnce, 'should have called onHeroesSuccess');
            assert(heroController.onHeroesSuccess.calledWith(heroes), 'onHeroesSuccess not called with expected data');
            onHeroesSuccessSpy.restore();
            getHeroesStub.restore();
        });

        it('should call onHeroesError', function() {
            var getHeroesStub = sinon.stub(HeroService, 'getHeroes', function() { return $q.reject(error) });
            var onHeroesErrorSpy = sinon.spy(heroController, 'onHeroesError');

            heroController.getHeroes();
            $rootScope.$apply();

            assert(heroController.onHeroesError.calledOnce, 'should have called onHeroesError');
            assert(heroController.onHeroesError.calledWith(error));

            onHeroesErrorSpy.restore();
            getHeroesStub.restore();
        });

        it('should test heroes success callback', function() {
            var logInfoSpy = sinon.spy($log, 'info');
            heroController.onHeroesSuccess(heroes);

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