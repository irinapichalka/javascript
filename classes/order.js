class Order {
  constructor(price, city, type) {
    this.ID = Math.random().toString(36).substring(4);
    this.price = Number(price);
    this.dateCreated = new Date();
    this.isConfirmed = Boolean(false);
    this.dateConfirmed = new Date();
    this.city = String(city);
    this.type = String(type);
  }

  checkPrice() {
    if (this.price > 1000) return true;
    else return false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") return true;
    else return false;
  }
}
const order1 = new Order(100, "Kyiv", "Buy");
console.log(order1);
console.log(order1.checkPrice());

