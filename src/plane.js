'use strict';

class Plane{
  land(airport){
    airport.clearForLanding(this)
  };

  takeOff(airport){
    airport.clearForTakeOff(this)
  };
};