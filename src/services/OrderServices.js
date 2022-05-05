import {products} from "./ProductServices";
import OrderItem from "../models/OrderItem";
import Order from "../models/Order";

export const states = Object.freeze({
    1: 'Pending',
    2: 'Completed',
    3: 'Rejected',
})

let orders = [
    new Order(
        1,
        "Joe Smith",
        "Pending",
        new Date().toISOString(),
        [
            new OrderItem(
                products[0],
                6
            ),
            new OrderItem(
                products[1],
                8
            )
        ]
    ),
    new Order(
        2,
        "Joe Baker",
        "Completed",
        new Date().toISOString(),
        [
            new OrderItem(
                products[0],
                6
            ),
            new OrderItem(
                products[2],
                8
            )
        ]
    ),
    new Order(
        3,
        "Joe Adams",
        "Rejected",
        new Date().toISOString(),
        [
            new OrderItem(
                products[0],
                6
            ),
        ]
    ),
    new Order(
        4,
        "Joseph Evans",
        "Completed",
        new Date().toISOString(),
        [
            new OrderItem(
                products[1],
                8
            )
        ]
    ),
]

export const fetchAllOrders = async (p) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve(orders.slice((p-1)*3, p*3))
            }, 1500);
        }catch (e) {
            reject(new Error('Error on fetch orders'))
        }
    })
}

export const updateOrderItems = async (order, item) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                orders = orders.map(o => {
                    if(o.id === order.id) {
                        o.addItem(item);
                    }
                    return o;
                });
                const edited = orders.find(o => o.id === order.id);
                resolve(edited);
            }, 1500);
        }catch (e) {
            reject(new Error('Error on update order'))
        }
    })
}

export const retrieveOrderById = async (id) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve(orders.find(o => o.id === Number(id)));
            }, 1500);
        }catch (e) {
            reject(new Error('Error on update order'))
        }
    })
}

export const updateOrderState = async (id, state) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                orders = orders.map(o => {
                    if(o.id === Number(id)) {
                        o.status = states[state];
                    }
                    return o;
                });
                const edited = orders.find(o => o.id === Number(id));
                resolve(edited);
            }, 1500);
        }catch (e) {
            reject(new Error('Error on update order'))
        }
    })
}