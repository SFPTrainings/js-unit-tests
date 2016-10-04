'use strict';

describe('Hero directive testing', function() {
    var superheroData = {
        name: 'batman',
        secretName: 'bruce wayne'
    };

    beforeEach(bard.appModule('hero'));

    beforeEach(function() {
        bard.inject('$compile', '$rootScope');
    });

  it('reveal superhero secret name', function() {
      $rootScope.superheroData = superheroData;
      var element = $compile("<superhero hero='superheroData'></superhero>")($rootScope);
      $rootScope.$digest();

      assert(element.find('div').html());
      assert.include(element.find('div').html(), superheroData.name);
  });
});