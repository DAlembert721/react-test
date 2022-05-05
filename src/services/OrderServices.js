import {products} from "./ProductServices";
import OrderItem from "../models/OrderItem";
import Order from "../models/Order";


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