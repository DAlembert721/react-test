let orders = [
    {
        id: 1,
        consumer: "Joe Smith",
        status: "Pending",
        date: new Date().toISOString(),
        total: 127.23,
    },
    {
        id: 2,
        consumer: "Joe Baker",
        status: "Completed",
        date: new Date().toISOString(),
        total: 50.23,
    },
    {
        id: 3,
        consumer: "Joe Adams",
        status: "Rejected",
        date: new Date().toISOString(),
        total: 200.50,
    },
    {
        id: 4,
        consumer: "Joe Evans",
        status: "Completed",
        date: new Date().toISOString(),
        total: 100,
    }
]

export const fetchAllOrders = async (p) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve(orders.slice((p-1)*4, p*4))
            }, 1500);
        }catch (e) {
            reject(new Error('Error on fetch orders'))
        }
    })
}