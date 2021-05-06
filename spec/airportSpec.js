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
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).not.toEqual([plane]);
  });

  it('has a default capactiy', function() {
    expect(airport.capacity()).toEqual(20);
  });
});
