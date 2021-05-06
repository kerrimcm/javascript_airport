'use strict';

class Airport{
  constructor() {
    this._hangar = []
    this._capacity = 20
  }

  planes() {
    return this._hangar;
  };
  
  clearForLanding(plane) {
    if(this._isFull()) {
      throw 'Airport is full';
    } else {
      this._hangar.push(plane); 
    };
  };

  clearForTakeOff(plane) {
    this._hangar.pop(plane);
  };

  capacity() {
    return this._capacity;
  };

  _isFull() {
    return this._hangar.length === this._capacity
  };
};
