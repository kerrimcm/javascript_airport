'use strict';

describe('Weather', () => {

  let weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('returns true when weather is stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(weather._isStormy()).toBe(true);
  });

  it('returns false when weather is not stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather._isStormy()).toBe(false);
  });
});
