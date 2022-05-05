import {createSlice, current} from "@reduxjs/toolkit";
import {fetchAllProducts} from "../../services/ProductServices";

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
    fetchAllProducts(page)
        .then(products => {
            dispatch(fetchProducts(products));
        }).catch(err => {
            console.log(err);
    })
}

export default productsSlice.reducer;