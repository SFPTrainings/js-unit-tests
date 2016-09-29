'use strict';

describe('Math controller testing', function() {
    var mathController;
    var sum;
    var mean;
    beforeEach(module('math'));
    beforeEach(inject(function(_$controller_, _MathService_) {
        mathController = _$controller_('MathController');
        sum = sinon.stub(_MathService_, 'sum');
        mean = sinon.stub(_MathService_, 'arithmeticMean');
    }));
    it('should initialize controller', function() {
        assert(mathController.calculator.length === 0, 'calculator must be initialized with no numbers');
        assert(mathController.ratings.length === 0, 'ratings must be initialized with no stars');
        assert(mathController.rating === 1, 'rating bar default should be 1');
    });
    it('should add numbers from the calculator', function() {
        var calculatorMemory = [1, 2, 3, 4];
        var sumReturnValue = 10;
        sum.withArgs(calculatorMemory)
            .onFirstCall().returns(sumReturnValue);

        mathController.calculator = calculatorMemory;
        var total = mathController.sum();
        assert(sum.calledWith(calculatorMemory) === true, 'expected sum to be called with ' + calculatorMemory);
        assert(total === sumReturnValue, 'expected the sum to be 10');

    });
    it('clear calculator memory', function() {
        var calculatorMemory = [1, 2, 3, 4];
        mathController.calculator = calculatorMemory;
        mathController.clearCalculator();
        assert(mathController.calculator.length === 0, 'should erase calculator memory');
    });

    it('can add a new number to the calculator', function() {
        var calculatorMemory = [1];
        mathController.calculator = calculatorMemory;


        mathController.member = 2;
        mathController.addToCalculator();

        assert(mathController.calculator.length === 2, 'should contain two numbers');
        assert(mathController.calculator[1] === 2, 'the number was added ok to calculator' + JSON.stringify(mathController.calculator));
        assert(mathController.member === undefined, 'input value is resetted');
    });

    it('can add a new rating', function() {
        var ratingsMemory = [1];
        mathController.ratings = ratingsMemory;
        mathController.rating = 2;
        mathController.addToRatings();

        assert(mathController.ratings.length === 2, 'it contains both ratings');
        assert(mathController.ratings[1] === 2, 'the rigth ratting was added');
        assert(mathController.rating === 1, 'ratign slider value was reseted');
    });

    it('can calculate the average', function() {

        var ratingsMemory = [2, 4];
        mathController.ratings = ratingsMemory;
        mean.withArgs(ratingsMemory)
            .onFirstCall().returns(3);
        
        mathController.calcAverage();
 
        assert(mean.calledWith(ratingsMemory) === true, 'expected sum to be called with ' + ratingsMemory);
    });

});