'use strict';

class Weather {

  _isStormy() {
    if(this.stormGenerator() < 0.2) {
      return true;
    } else {
      return false;
    };
  };

  stormGenerator() {
    return Math.random();
  };
};
