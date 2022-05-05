class Order {
    constructor(id, customer, status, date, items) {
        this.id = id;
        this.status = status;
        this.date = date;
        this.customer = customer;
        this.items = items;
        this.subtotalAmount = items.reduce((a, b) => a + b.cost, 0);
        this.totalAmount = this.subtotalAmount;
        this.cityTax = this.totalAmount * 0.10;
        this.totalAmount += this.cityTax;
        this.countyTax = this.totalAmount * 0.05;
        this.totalAmount += this.countyTax;
        this.stateTax = this.totalAmount * 0.08;
        this.totalAmount += this.stateTax;
        this.federalTax = this.totalAmount * 0.02;
        this.totalAmount += this.federalTax;
        this.totalTaxes = this.totalAmount - this.subtotalAmount;
    }
}

export default Order;