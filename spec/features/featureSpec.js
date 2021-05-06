'use strict';

describe ('Feature Test:', function() {
  let plane;
  let airport;
  
  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  }); 

  it('can land a plane', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return false });
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
    spyOn(airport, '_isItStormy').and.callFake(function() { return false });
    for ( let i = 0; i < 20; i++ ) {
      plane.land(airport);
    };
    expect(function() { plane.land(airport) } ).toThrow('Airport is full');
  });

  it('can change capacity of airport', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return false });
    airport.changeCapacity(10)
    for ( let i = 0; i < 10; i++ ) {
      plane.land(airport);
    };
    expect(function() { plane.land(airport) } ).toThrow('Airport is full');
  });

  it('prevents take off when weather is stormy', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return true });
    airport._hangar = [plane];
    expect(function() { plane.takeOff(airport) } ).toThrow('Stormy weather, do not take off');
  });

  it('prevents landing when weather is stormy', function() {
    spyOn(airport, '_isItStormy').and.callFake(function() { return true });
    expect(function() { plane.land(airport) } ).toThrow('Stormy weather, do not land');
  });
});
