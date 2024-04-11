export default class Airport {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get location() {
    return this._location;
  }

  set location(location) {
    this._location = location;
  }

  [Symbol.toPrimitive](cls) {
    if (cls === 'number') {
      return this.size;
    }
    if (cls === 'string') {
      return this.location;
    }
    return this;
  }
}
