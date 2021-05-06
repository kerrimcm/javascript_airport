'use strict';

describe('Airport', () => {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane',['land']);
  });

  it('has no planes by default', () => {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return false });
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).not.toEqual([plane]);
  });

  it('has a default capactiy', function() {
    expect(airport.capacity()).toEqual(20);
  });

  it('can change capacity', function() {
    airport.changeCapacity(100);
    expect(airport.capacity()).toEqual(100);
  });

  it('throws errors for stormy weather on take off', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return true });
    expect(function() { airport.clearForTakeOff() } ).toThrow('Stormy weather, do not take off');
  });
});
