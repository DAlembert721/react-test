import {createSlice, current} from "@reduxjs/toolkit";
import {fetchAllProducts} from "../../services/ProductServices";
import {requestStarted, requestSuccess} from "./ui";

const INIT_STATE = {
    data: [],
    current: null,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        ...INIT_STATE
    },
    reducers: {
        fetchProducts: (state, action) => {
            state.data = action.payload;
        }
    }
})

export const {fetchProducts} = productsSlice.actions;

export const fetchAllProductByPage = page => async (dispatch) => {
    dispatch(requestStarted());
    fetchAllProducts(page)
        .then(products => {
            dispatch(requestSuccess());
            dispatch(fetchProducts(products));
        }).catch(err => {
            console.log(err);
    })
}

export default productsSlice.reducer;