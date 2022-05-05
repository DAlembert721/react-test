import {createSlice, current} from "@reduxjs/toolkit";
import {
    addOrder,
    fetchAllOrders,
    retrieveOrderById,
    updateOrderItems,
    updateOrderState
} from "../../services/OrderServices";
import {requestStarted, requestSuccess} from "./ui";

const INIT_STATE = {
    data: [],
    current: null,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
       ...INIT_STATE
    },
    reducers: {
        setOrdersByPage: (state, action) => {
            state.data = action.payload;
        },
        setCurrentOrder: (state, action) => {
            state.current = action.payload;
        },
        resetCurrentOrder: (state) => {
            state.current = INIT_STATE.current;
        },
        resetOrdersState: (state) => {
            state = INIT_STATE;
        },
        addItemToOrder: (state, action) => {
            state.current = action.payload;
        },
        addOrderToData: (state, action) => {
            state.data = [action.payload, ...state.data.splice(0, state.data.length - 1)]
        }
    },
});

export const {setOrdersByPage, setCurrentOrder, addItemToOrder, resetCurrentOrder, resetOrdersState, addOrderToData} = ordersSlice.actions;

export const fetchAllOrdersByPage = (page) => async (dispatch)  => {
    dispatch(requestStarted());
    fetchAllOrders(page)
        .then(orders => {
            dispatch(requestSuccess());
            dispatch(setOrdersByPage(orders));
        }).catch(e => {
        console.log(e);
    });
}

export const addOrderItem = (product, order) => async (dispatch)  => {
    dispatch(requestStarted());
    updateOrderItems(order, product)
        .then(order => {
            dispatch(requestSuccess());
            dispatch(addItemToOrder(order));
        }).catch(e => {
        console.log(e);
    });
}

export const getOrderById = (id) => async (dispatch) => {
    dispatch(requestStarted());
    retrieveOrderById(id)
        .then(order => {
            dispatch(requestSuccess());
            dispatch(setCurrentOrder(order))
        }).catch(e => {
        console.log(e);
    });
}

export const editOrderStatus = (id, status) => async (dispatch) => {
    dispatch(requestStarted());
    updateOrderState(id, status)
        .then(order => {
            dispatch(requestSuccess());
            dispatch(setCurrentOrder(order))
        }).catch(e => {
        console.log(e);
    });
}

export const createOrder = (newOrder) => async (dispatch) => {
    dispatch(requestStarted());
    addOrder(newOrder)
        .then(order => {
            dispatch(requestSuccess());
            dispatch(addOrderToData(order))
        }).catch(e => {
        console.log(e);
    });
}

export default ordersSlice.reducer;