'use strict';
angular
    .module('math')
    .controller('MathController', function(MathService) {
        var self = this;
        self.calculator = [];
        self.ratings = [];
        self.rating = 1;
        self.sum = function() {
            return MathService.sum(self.calculator);
        };
        self.addToCalculator = function() {
            self.calculator.push(self.member);
            self.member = undefined;
        };
        self.clearCalculator = function() {
            self.calculator = []
        };
        self.addToRatings = function() {
            self.ratings.push(parseInt(self.rating,10));
            self.rating = 1;
        };
        self.calcAverage = function() {
            return MathService.arithmeticMean(self.ratings);
        };
    });