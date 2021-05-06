'use strict';

class Airport{
  constructor() {
    const defaultCapacity = 20
    this._hangar = []
    this._capacity = defaultCapacity
    this.weather = new Weather();
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
    if(this._isItStormy()) {
      throw 'Stormy weather, do not take off';
    } else {
      this._hangar.pop(plane);
    };
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

  _isItStormy() {
    return this.weather._isStormy
  };
};
