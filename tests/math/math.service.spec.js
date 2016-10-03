'use strict';
describe('Math service testing', function() {
    var MathService;

    beforeEach(module('math'));

    beforeEach(inject(function(_MathService_) {
        MathService = _MathService_;
    }));

    it('should add numbers', function() {
        var a = 3; var b = 5; var c = 6;
        var total = MathService.sum([a, b, c]);
        assert(total === a + b + c, 'shoud calculate the sum of 3 numbers');

        total = MathService.sum([a]);
        assert(total === a, 'shoud calculate the sum of 1 numbers');

        total = MathService.sum([]);
        assert(total === 0, 'shoud calculate the sum of 0 numbers');
    });

    it('should calculate the arithmetic mean of numbers', function() {
        var a = 1; var b = 5; var c = 6;
        var total = MathService.arithmeticMean([a, b, c]);
        assert(total === (a + b + c)/3, 'average for 3 numbers');

        total = MathService.arithmeticMean([a]);
        assert(total === a, 'average for 1 numbers');

        total = MathService.arithmeticMean([]);
        assert(total === 0, 'average for 0 numbers');
    });
});