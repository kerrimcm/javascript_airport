'use strict';

class Airport{
  constructor() {
    const defaultCapacity = 20
    this._hangar = []
    this._capacity = defaultCapacity
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

  changeCapacity(newCapacity) {
    this._capacity = newCapacity;
  };

  _isFull() {
    return this._hangar.length === this._capacity
  };
};
