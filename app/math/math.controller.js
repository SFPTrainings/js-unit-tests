angular
    .module('math')
    .controller('MathController', function(MathService) {
        this.calculator = [];
        this.ratings = [];
        this.rating = 1;
        this.sum = function() {
            return MathService.sum(this.calculator);
        }
        this.addToCalculator = function() {
            this.calculator.push(this.member);
            this.member = undefined;
        }
        this.clearCalculator = function() {
            this.calculator = []
        }
        this.addToRatings = function() {
            this.ratings.push(parseInt(this.rating,10));
            this.rating = 1;
        }
        this.calcAverage = function() {
            return MathService.arithmeticMean(this.ratings);
        }
    });