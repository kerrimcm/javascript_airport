'use strict';

describe('Plane', () => {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
  });
  
  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  
  it('can take off from an airport', function() {
    plane.takeOff(airport);
    expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
  });
});
