'use strict';

describe('Math controller testing', function() {
    var mathController;
    var sum;

    beforeEach(module('math'));

    beforeEach(inject(function(_$controller_, _MathService_) {
        mathController = _$controller_('MathController');
        sum = sinon.stub(_MathService_, 'sum');
    }));

    afterEach(function() {
        sum.restore();
    });

    it('should initialize controller', function() {
        assert(mathController.calculator.length === 0, 'calculator must be initialized with no numbers');
        assert(mathController.ratings.length === 0, 'ratings must be initialized with no stars');
        assert(mathController.rating === 1, 'rating bar default should be 1');
    });

    it('should add numbers from the calculator', function() {
        var calculatorMemory = [1, 2, 3, 4];
        var sumReturnValue = 10;
        sum.withArgs(calculatorMemory)
            .returns(sumReturnValue);

        mathController.calculator = calculatorMemory;
        var total = mathController.sum();

        assert(sum.calledWith(calculatorMemory), 'expected sum to be called with ' + calculatorMemory);
        assert(total === sumReturnValue, 'expected the sum to be 10');

    });

    it('clear calculator memory', function() {
        var calculatorMemory = [1, 2, 3, 4];
        mathController.calculator = calculatorMemory;
        mathController.clearCalculator();

        assert(mathController.calculator.length === 0, 'should erase calculator memory');
    });
});