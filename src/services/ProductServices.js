import Product from "../models/Product";

export const products = [
    new Product(
        1,
        "Chocolate",
        "Candy",
        10,
        true,
    ),
    new Product(
        2,
        "Chocolate Chip Cookie",
        "Cookies",
        5,
        false,
    ),
    new Product(
        3,
        "Chocolate cake",
        "Cakes",
        25,
        true,
    ),
];


export const fetchAllProducts = async (page = 0) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                if(page === 0) {
                    resolve(products);
                }
                resolve(products.slice((page-1)*3, page*3))
            }, 1500);
        }catch (e) {
            reject(new Error('Error on fetch products'))
        }
    })
}