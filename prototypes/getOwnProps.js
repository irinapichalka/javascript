const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} is stopped`);
  },
};
const ship = {
  name: "Argo",
  liftAnchorUp() {
    console.log(`${this.name} lifting anchor up`);
  },
  liftAnchorDown() {
    console.log(`${this.name} lifting anchor down`);
  },
  startMachine() {
    this.liftAnchorUp();
    this.move();
  },
  stopMachine() {
    this.stop();
    this.liftAnchorDown();
  },
  __proto__: vehicle,
};
function getOwnProps(obj) {
  return Object.getOwnPropertyNames(obj).filter(
    (item) => typeof obj[item] !== "function"
  );
}
console.log(getOwnProps(ship));
