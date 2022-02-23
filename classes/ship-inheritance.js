class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }
  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}
class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    super(name, numberOfWheels);
    this.maxSpeed = maxSpeed;
  }

  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  }

  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  }

  move() {
    this.liftAnchorUp();
    super.move();
  }

  stop() {
    super.stop();
    this.liftAnchorDown();
  }
}
const ship1 = new Ship("Aurora", 4, 300);
console.log(ship1);
ship1.stop();
