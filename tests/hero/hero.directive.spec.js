'use strict';

describe('Hero directive testing', function() {
	var $compile,
		$rootScope;

    beforeEach(module('hero'));
    
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

  it('reveal superhero secret name', function() {
  	$rootScope.superheroData = {
  		name: 'batman',
  		secretName: 'bruce wayne'
  	};
    var element = $compile("<superhero hero='superheroData'></superhero>")($rootScope);
    $rootScope.$digest();
    assert.isOk(element.find('div').html());
    assert.include(element.find('div').html(), 'batman');
  });
});