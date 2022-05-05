import {configureStore} from "@reduxjs/toolkit";
import orders from "./reducers/orders";
import products from "./reducers/products";
import ui from "./reducers/ui";


export default configureStore({
    reducer: {
        orders,
        products,
        ui,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});