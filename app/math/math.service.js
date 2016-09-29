'use strict';
angular
    .module('math')
    .service('MathService', function() {
        var math = {};
        math.sum = function(members) {
            var sum = 0;
            members.forEach(function(member) {
               sum += member;
            });
            return sum;
        }
        math.arithmeticMean = function (members) {
            if (members.length === 0) {
                return 0;
            }
            return math.sum(members)/members.length;
        }
        return math;
    });