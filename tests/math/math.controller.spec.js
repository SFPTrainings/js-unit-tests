describe('Math controller testing', function() {
    var mathController;
    beforeEach(function() {
        module('math');
    });
    beforeEach(inject(function(_$controller_) {
        mathController = _$controller_('MathController');
    }));
    it('should initialize controller', function() {
        assert(mathController.calculator.length === 0, 'calculator must be initialized with no numbers');
        assert(mathController.ratings.length === 0, 'ratings must be initialized with no stars');
        assert(mathController.rating === 1, 'rating bar default should be 1');
    });
    it('clear calculator memory', function() {
        var calculatorMemory = [1, 2, 3, 4];
        mathController.calculator = calculatorMemory;
        mathController.clearCalculator();
        assert(mathController.calculator.length === 0, 'should erase calculator memory');
    });
});