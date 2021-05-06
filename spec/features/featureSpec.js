'use strict';

describe ('Feature Test:', function() {
  let plane;
  let airport;
  let weather;
  
  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
    weather = new Weather();
  }); 

  it('can land a plane', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('can take off planes', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return false });
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

  it('can change capacity of airport', function() {
    airport.changeCapacity(10)
    for ( let i = 0; i < 10; i++ ) {
      plane.land(airport);
    };
    expect(function() { plane.land(airport) } ).toThrow('Airport is full');
  });

  it('prevents take off when weather is stormy', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return true });
    plane.land(airport);
    expect(function() { plane.takeOff(airport) } ).toThrow('Stormy weather, do not take off');
  });
});
