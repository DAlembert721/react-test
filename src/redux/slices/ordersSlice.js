import {createSlice, current} from "@reduxjs/toolkit";
import {fetchAllOrders} from "../../services/OrderServices";

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
        }
    },
});

export const {setOrdersByPage, setCurrentOrder, resetCurrentOrder, resetOrdersState} = ordersSlice.actions;

export const fetchAllOrdersByPage = (page) => async (dispatch)  => {
    fetchAllOrders(page)
        .then(orders => {
            dispatch(setOrdersByPage(orders));
        }).catch(e => {
        console.log(e);
    });
}


export default ordersSlice.reducer;