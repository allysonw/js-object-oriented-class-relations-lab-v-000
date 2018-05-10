let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0, passengerId = 0, tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);

    this.trips = function () {
      return store.trips.filter(trip => trip.driverId === this.id);
    }

    this.passengers = function () {
      return this.trips().map(trip => trip.passenger());
    }
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);

    this.trips = function () {
      return store.trips.filter(trip => trip.passengerId === this.id);
    }

    this.drivers = function() {
      return this.trips().map(trip => trip.driver());
    }
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    this.driver = function () { return driver };
    this.passenger = function () { return passenger };

    this.id = ++tripId;

    store.trips.push(this);
  }
}
