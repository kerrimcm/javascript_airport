'use strict';

describe ('Feature Test:', function() {
  let plane;
  let airport;
  
  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  }); 

  it('can land a plane', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('can take off planes', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it('prevents landing when airport is full', function() {
    for ( let i = 0; i < 20; i++ ) {
      plane.land(airport);
    };
    expect(function() { plane.land(airport) } ).toThrow('Airport is full');
  });
});
