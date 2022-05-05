class OrderItem {
    constructor(product, quantity) {
        this.id= product.id;
        this.name= product.name;
        this.quantity= quantity;
        this.price = product.price;
        this.cost = this.price * quantity;
    }
}

export default OrderItem;